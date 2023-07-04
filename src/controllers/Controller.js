import ProjectManager from "../models/ProjectManager";
import ProjectModel from "../models/Project";
import TaskModel from "../models/Task";

import ModalFormView from "../views/ModalForm";
import TabsView from "../views/Tabs";
import ProjectView from "../views/Project";
import { createTask } from "../views/TaskUtility";

import TemplateProjects from "../TemplateProjects";

const Controller = () => {
    const ProjectManagerEvents = ProjectManager.getEvents();
    const ModalFormEvents = ModalFormView.getEvents();
    const TabEvents = TabsView.getEvents();
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

    TabEvents.tabClickedEvent.addListener((event) => {
        ProjectManager.setCurrentIndex(event.index);
    });

    ModalFormEvents.submitFormEvent.addListener((event) => {
        if (!event.data) return;

        if (event.type === "addProject") {
            const newProject = ProjectModel(event.data.name);
            ProjectManager.addProject(newProject);
            currentProjectEvents = ProjectManager.getCurrentProject().getEvents();
        } else if (event.type === "addTask") {
            const newTask = TaskModel(event.data.title, event.data);
            ProjectManager.getCurrentProject().addTask(newTask);
        }
    });

    ProjectManager.addProjects(TemplateProjects());
    TabsView.LoadTabs(ProjectManager.getProjects(), ProjectManager.getCurrentProject());
    ProjectView.loadProject(ProjectManager.getCurrentProject());

    initProjectListeners(ProjectManager.getCurrentProject());
};

export default Controller;
