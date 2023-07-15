import "./style/style.css";
import "./style/form.css";
import "flatpickr/dist/flatpickr.css";

import Project from "./models/Project";
import Task from "./models/Task";

import * as FormView from "./views/formView";
import * as TabView from "./views/tabView";
import * as TaskView from "./views/taskView";
import * as ProjectView from "./views/projectView";

import InitialLoad from "./InitialLoad";
import elements from "./views/elements";

const ProjectManager = InitialLoad();

function onProjectFormClick() {
    const formData = FormView.getFormData(elements.projectForm);

    if (!formData) return false;

    const project = Project(formData.name);
    ProjectManager.addProject(project);
    ProjectManager.setCurrentProject(ProjectManager.getProjects().length - 1);
    ProjectView.loadProject(project);
    TabView.loadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
    TabView.updateSelected(ProjectManager.getCurrentProject().getProjectIndex())

    return true;
}

function onTabClick(event, tabIndex) {
    const { target } = event;

    if (target.classList.contains("project-selector")) {
        ProjectManager.setCurrentProject(tabIndex);
        ProjectView.loadProject(ProjectManager.getCurrentProject());
        TabView.updateSelected(tabIndex);
    } else if (target.classList.contains("project-edit")) {
        console.log("edit project");
    } else if (target.classList.contains("project-delete")) {
        ProjectManager.deleteProject(tabIndex);
        TabView.loadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
        ProjectView.loadProject(ProjectManager.getCurrentProject());
    }
}

elements.projectFormSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const success = onProjectFormClick();

    if (success) {
        elements.projectForm.closest(".modal-overlay").click();
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
