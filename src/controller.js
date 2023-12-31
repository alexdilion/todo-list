import MicroModal from "micromodal";

import Project from "./models/Project";
import Task from "./models/Task";

import * as FormView from "./views/formView";
import * as TabView from "./views/tabView";
import * as TaskView from "./views/taskView";
import * as ProjectView from "./views/projectView";
import * as localStorage from "./localStorage";

import InitialLoad from "./InitialLoad";
import elements from "./views/elements";

export default function app() {
    let ProjectManager;

    if (window.localStorage && window.localStorage.projects) {
        const data = localStorage.loadData();

        ProjectManager = InitialLoad(data.username, "load", data.projects);
    }

    function initialise(event) {
        event.preventDefault();
        if (event.target === elements.templateButtonsContainer) return;

        const username = elements.signupFormUsername.value.trim();

        if (event.target === elements.demoTemplateButton) {
            ProjectManager = InitialLoad(username, "demo");
        } else if (event.target === elements.emptyTemplateButton) {
            ProjectManager = InitialLoad(username, "empty");
        }

        localStorage.saveData(username, ProjectManager.getProjects());
    }

    function editProjectProperties(project, properties) {
        project.setName(properties.name);

        localStorage.editProject(project);
    }

    function editTaskProperties(task, properties) {
        Object.keys(properties).forEach((property) => {
            task.setProperty(property, properties[property]);
        });

        ProjectManager.getCurrentProject().sortTasks();
        localStorage.editTask(task);
    }

    function onTaskFormSubmit() {
        const formData = FormView.getFormData(elements.taskForm);
        const { taskForm } = elements;

        if (!taskForm || !formData) return false;

        if (taskForm.getAttribute("data-form-type") === "edit") {
            editTaskProperties(ProjectManager.getCurrentProject().getTask(+elements.taskForm.getAttribute("data-task-index")), formData);
            return true;
        }

        const project = ProjectManager.getCurrentProject();

        if (project.isOverview()) {
            const selectedProject = ProjectManager.getProject(formData.projectIndex);

            const task = Task(selectedProject, formData);
            selectedProject.addTask(task);
            selectedProject.sortTasks();
            TaskView.createTask(task);

            ProjectView.loadProject(project);
            localStorage.addTask(task);

            return true;
        }

        const task = Task(project, formData);
        project.addTask(task);
        project.sortTasks();
        TaskView.createTask(task);
        localStorage.addTask(task);

        return true;
    }

    function onProjectFormSubmit() {
        const formData = FormView.getFormData(elements.projectForm);
        const { projectForm } = elements;

        if (!formData) return false;

        if (projectForm.getAttribute("data-form-type") === "edit") {
            editProjectProperties(ProjectManager.getProject(+projectForm.getAttribute("data-project-index")), formData);
            return true;
        }

        const project = Project(formData.name);
        ProjectManager.addProject(project);
        ProjectManager.setCurrentProject(ProjectManager.getProjects().length - 1);
        ProjectView.loadProject(project);
        TabView.loadTabs(ProjectManager.getProjects());
        TabView.updateSelected(ProjectManager.getCurrentProject().getProjectIndex());
        localStorage.addProject(project);

        return true;
    }

    function onTabClick(event, tabIndex) {
        const { target } = event;

        if (target.classList.contains("project-selector")) {
            ProjectManager.setCurrentProject(tabIndex);
            ProjectManager.getCurrentProject().hideTaskDescriptions();

            ProjectView.loadProject(ProjectManager.getCurrentProject());
            TabView.updateSelected(tabIndex);
        } else if (target.classList.contains("project-edit")) {
            MicroModal.show(elements.projectFormModal.id);
            FormView.onModalShow(elements.projectFormModal, target);

            const project = ProjectManager.getProject(tabIndex);
            FormView.loadProjectProperties(project);
            elements.projectForm.setAttribute("data-project-index", tabIndex);
        } else if (target.classList.contains("project-delete")) {
            ProjectManager.deleteProject(tabIndex);
            localStorage.removeProject(tabIndex);

            TabView.loadTabs(ProjectManager.getProjects());
            ProjectView.loadProject(ProjectManager.getCurrentProject());
            TabView.updateSelected(ProjectManager.getCurrentProject().getProjectIndex());
        }
    }

    function onTaskClick(event) {
        const { target } = event;
        const taskElement = target.closest(".task-container");

        if (!taskElement || taskElement === target) return;

        const taskIndex = [...elements.tasksContainer.childNodes].indexOf(taskElement);
        const project = ProjectManager.getCurrentProject();
        const task = project.getTask(taskIndex);

        if (target.classList.contains("edit-button")) {
            MicroModal.show(elements.taskFormModal.id);
            FormView.onModalShow(elements.taskFormModal, target);

            FormView.loadTaskProperties(task);
            elements.taskFormProjectContainer.classList.add("display-none");
            elements.taskForm.setAttribute("data-task-index", taskIndex);
        } else if (target.classList.contains("delete-button")) {
            localStorage.deleteTask(task);
            project.deleteTask(taskIndex);

            ProjectView.loadProject(ProjectManager.getCurrentProject());
        } else if (target.classList.contains("task-done")) {
            editTaskProperties(task, { done: target.checked });
        } else if (target.classList.contains("show-button")) {
            const descriptionElement = taskElement.querySelector(".task-description");

            if (descriptionElement.textContent !== "") {
                taskElement.querySelector(".accordion-container").classList.toggle("accordion-visible");
                task.setProperty("descriptionToggled", !task.getProperty("descriptionToggled"));
            }
        }
    }

    function onTaskAddClick() {
        const currentProject = ProjectManager.getCurrentProject();

        if (currentProject.isOverview()) {
            FormView.loadProjectSelectOptions(ProjectManager.getProjects());
            elements.taskFormProjectContainer.classList.remove("display-none");
            return;
        }

        elements.taskFormProjectContainer.classList.add("display-none");
    }

    function onSortChange(event) {
        const sortType = event.target.value;
        const project = ProjectManager.getCurrentProject();

        project.setSortType(sortType);
        localStorage.editProject(project);
        ProjectView.loadProject(project);
    }

    function toggleSidebar() {
        elements.sidebarContainer.classList.toggle("collapsed");
        elements.mainWrapper.classList.toggle("expanded");
    }

    elements.projectFormSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        const success = onProjectFormSubmit();

        if (success) {
            elements.projectForm.closest(".modal-overlay").click();
            TabView.loadTabs(ProjectManager.getProjects());
            ProjectView.updateHeader(ProjectManager.getCurrentProject());
        }
    });

    elements.taskFormSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        const success = onTaskFormSubmit();

        if (success) {
            elements.taskForm.closest(".modal-overlay").click();
            ProjectView.loadProject(ProjectManager.getCurrentProject());
        }
    });

    [elements.projectsContainer, elements.overviewsContainer].forEach((container) => {
        container.addEventListener("click", (event) => {
            const tab = event.target.closest(".project-selector");
            if (!tab) return;

            const tabIndex = [...elements.overviewsContainer.childNodes, ...elements.projectsContainer.childNodes].indexOf(tab);
            onTabClick(event, tabIndex);
        });
    });

    elements.tasksContainer.addEventListener("click", onTaskClick);

    [...document.querySelectorAll("[data-micromodal-close]")].forEach((element) => {
        element.addEventListener("click", (event) => {
            if (!event.target.hasAttribute("data-micromodal-close")) return;
            FormView.resetInputs(elements.projectForm);
            FormView.resetInputs(elements.taskForm);
        });
    });

    elements.newTaskButton.addEventListener("click", onTaskAddClick);
    elements.sortTasksSelector.addEventListener("change", onSortChange);
    elements.sidebarCollapse.addEventListener("click", toggleSidebar);
    elements.templateButtonsContainer.addEventListener("click", initialise);
}
