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

function editProjectProperties(project, formData) {
    project.setName(formData.name);
}

function onProjectFormSubmit() {
    const formData = FormView.getFormData(elements.projectForm);
    const { projectForm } = elements;

    if (projectForm.getAttribute("data-form-type") === "edit") {
        editProjectProperties(ProjectManager.getProject(projectForm.getAttribute("data-project-index")), formData);
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

[elements.projectsContainer, elements.overviewsContainer].forEach((container) => {
    container.addEventListener("click", (event) => {
        const tab = event.target.closest(".project-selector");
        if (!tab) return;

        const tabIndex = [...elements.overviewsContainer.childNodes, ...elements.projectsContainer.childNodes].indexOf(tab);
        onTabClick(event, tabIndex);
    });
});

elements.tasksContainer.addEventListener("click", onTaskClick);
