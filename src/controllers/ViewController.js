import ProjectModel from "../models/Project";
import TaskModel from "../models/Task";

import ModalFormView from "../views/ModalForm";
import TabsView from "../views/Tabs";
import ProjectView from "../views/Project";

export default function ViewController(ProjectManager) {
    const ModalFormEvents = ModalFormView.getEvents();
    const TabEvents = TabsView.getEvents();
    const ProjectEvents = ProjectView.getEvents();

    ModalFormEvents.submitFormEvent.addListener((event) => {
        if (!event.data) return;

        if (event.type === "addProject") {
            const newProject = ProjectModel(event.data.name);
            const success = ProjectManager.addProject(newProject);

            if (success) {
                const currentForm = ModalFormView.getCurrentForm();

                if (!currentForm) return; // currentForm is null when the page initially loads

                ModalFormView.resetInputs(currentForm);
                currentForm.closest(".modal-overlay").click();
            } else {
                // Add invalid style to textbox
            }
        } else if (event.type === "addTask") {
            const newTask = TaskModel(event.data.title, event.data);
            ProjectManager.getCurrentProject().addTask(newTask);
        }
    });

    TabEvents.tabClickEvent.addListener((event) => {
        if (event.target.classList.contains("project-selector")) {
            ProjectManager.setCurrentIndex(event.index);
        } else if (event.target.classList.contains("project-delete")) {
            ProjectManager.deleteProject(event.index);
        } else if (event.target.classList.contains("project-edit")) {
            console.log("Editing project");
        }
    });

    ProjectEvents.taskDeleteEvent.addListener((event) => {
        ProjectManager.getCurrentProject().deleteTask(event.taskIndex);
    });

    ProjectEvents.taskToggleDoneEvent.addListener((event) => {
        ProjectManager.getCurrentProject().getTask(event.taskIndex).setProperty("done", event.value);
    });
}
