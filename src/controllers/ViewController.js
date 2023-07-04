import ProjectModel from "../models/Project";
import TaskModel from "../models/Task";

import ModalFormView from "../views/ModalForm";
import TabsView from "../views/Tabs";
import ProjectView from "../views/Project";
import { createTask } from "../views/TaskUtility";

export default function ViewController(ProjectManager) {
    const ModalFormEvents = ModalFormView.getEvents();
    const TabEvents = TabsView.getEvents();

    ModalFormEvents.submitFormEvent.addListener((event) => {
        if (!event.data) return;

        if (event.type === "addProject") {
            const newProject = ProjectModel(event.data.name);
            ProjectManager.addProject(newProject);
        } else if (event.type === "addTask") {
            const newTask = TaskModel(event.data.title, event.data);
            ProjectManager.getCurrentProject().addTask(newTask);
        }
    });

    TabEvents.tabClickedEvent.addListener((event) => {
        ProjectManager.setCurrentIndex(event.index);
    });
}