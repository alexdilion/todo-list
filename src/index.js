import "./style/style.css";
import "./style/form.css";
import "flatpickr/dist/flatpickr.css";

import MicroModal from "micromodal";

import Project from "./models/Project";
import Task from "./models/Task";

import * as FormView from "./views/formView";
import * as TabView from "./views/tabView";
import * as TaskView from "./views/taskView";
import * as ProjectView from "./views/projectView";

import InitialLoad from "./InitialLoad";
import elements from "./views/elements";

const ProjectManager = InitialLoad();

function editProjectProperties(project, properties) {
    project.setName(properties.name);
}

function editTaskProperties(task, properties) {
    Object.keys(properties).forEach((property) => {
        task.setProperty(property, properties[property]);
    });
}

function onTaskFormSubmit() {
    const formData = FormView.getFormData(elements.taskForm);
    const { taskForm } = elements;

    if (taskForm.getAttribute("data-form-type") === "edit") {
        editTaskProperties(ProjectManager.getCurrentProject().getTask(+elements.taskForm.getAttribute("data-task-index")), formData);
        return true;
    }

    return false;
}

function onProjectFormSubmit() {
    const formData = FormView.getFormData(elements.projectForm);
    const { projectForm } = elements;

    if (projectForm.getAttribute("data-form-type") === "edit") {
        editProjectProperties(ProjectManager.getProject(+projectForm.getAttribute("data-project-index")), formData);
        return true;
    }

    if (!formData) return false;

    const project = Project(formData.name);
    ProjectManager.addProject(project);
    ProjectManager.setCurrentProject(ProjectManager.getProjects().length - 1);
    ProjectView.loadProject(project);
    TabView.loadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
    TabView.updateSelected(ProjectManager.getCurrentProject().getProjectIndex());

    return true;
}

function onTabClick(event, tabIndex) {
    const { target } = event;

    if (target.classList.contains("project-selector")) {
        ProjectManager.setCurrentProject(tabIndex);
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
        TabView.loadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
        ProjectView.loadProject(ProjectManager.getCurrentProject());
    }
}

function onTaskClick(event) {
    const { target } = event;
    const taskElement = target.closest(".task-container");

    if (!taskElement) return;

    const taskIndex = [...elements.tasksContainer.childNodes].indexOf(taskElement);
    const project = ProjectManager.getCurrentProject();

    if (target.classList.contains("edit-button")) {
        MicroModal.show(elements.taskFormModal.id);
        FormView.onModalShow(elements.taskFormModal, target);

        const task = project.getTask(taskIndex);
        FormView.loadTaskProperties(task);
        elements.projectForm.setAttribute("data-task-index", taskIndex);
    } else if (target.classList.contains("delete-button")) {
        project.deleteTask(taskIndex);
        ProjectView.loadProject(ProjectManager.getCurrentProject());
    } else if (target.classList.contains("task-done")) {
        const task = project.getTask(taskIndex);
        task.setProperty("done", target.checked);
    }
}

elements.projectFormSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const success = onProjectFormSubmit();

    if (success) {
        elements.projectForm.closest(".modal-overlay").click();
        TabView.loadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
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
