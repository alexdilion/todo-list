import ProjectModel from "../models/Project";
import TaskModel from "../models/Task";

import ModalFormView from "../views/ModalForm";
import TabsView from "../views/Tabs";
import ProjectView from "../views/Project";
import { createTask } from "../views/TaskUtility";

import templateProjects from "../TemplateProjects";

export default function ModelController(ProjectManager) {
    const ProjectManagerEvents = ProjectManager.getEvents();
    let currentProjectEvents = null;

    function initProjectListeners(project) {
        if (project.isListening()) return;

        currentProjectEvents = ProjectManager.getCurrentProject().getEvents();

        currentProjectEvents.taskAddedEvent.addListener((event) => {
            createTask(event.task);
        });

        project.setListening();
    }

    ProjectManagerEvents.projectAddedEvent.addListener(() => {
        TabsView.LoadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
    });

    ProjectManagerEvents.projectSwitchedEvent.addListener((event) => {
        ProjectView.loadProject(event.project);
        TabsView.updateSelected(event.currentIndex);
        initProjectListeners(event.project);
    });

    ProjectManager.addProjects(templateProjects());
    TabsView.LoadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
    ProjectView.loadProject(ProjectManager.getCurrentProject());

    initProjectListeners(ProjectManager.getCurrentProject());
}
