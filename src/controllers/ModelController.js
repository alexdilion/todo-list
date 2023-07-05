import ProjectModel from "../models/Project";
import TaskModel from "../models/Task";

import ModalFormView from "../views/ModalForm";
import TabsView from "../views/Tabs";
import ProjectView from "../views/Project";
import TaskView from "../views/Task";

import templateProjects from "../templateProjects";

export default function ModelController(ProjectManager) {
    const ProjectManagerEvents = ProjectManager.getEvents();
    let currentProjectEvents = null;

    function initProjectListeners(project) {
        if (project.isListening()) return;

        currentProjectEvents = ProjectManager.getCurrentProject().getEvents();

        currentProjectEvents.taskAddedEvent.addListener((event) => {
            TaskView.createTask(event.task);
        });

        currentProjectEvents.taskDeletedEvent.addListener((event) => {
            TaskView.removeTask(event.taskIndex);
        });

        project.setListening();
    }

    ProjectManagerEvents.projectAddedEvent.addListener(() => {
        TabsView.LoadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
    });

    ProjectManagerEvents.projectDeletedEvent.addListener((event) => {
        const currentProject = ProjectManager.getCurrentProject();
        TabsView.LoadTabs(ProjectManager.getProjects(), currentProject);

        if (event.index === ProjectManager.getCurrentProjectIndex()) {
            ProjectView.loadProject(ProjectManager.getProject(0));
        }
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
