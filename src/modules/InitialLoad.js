import flatpickr from "flatpickr";
import ProjectManager from "./ProjectManager";
import ToDoProject from "./ToDoProject";
import ToDoItem from "./ToDoItem";
import LoadProject from "./dom/LoadProject";
import UpdateProjectTabs from "./dom/UpdateProjectTabs";

export default function InitialLoad() {
    const choresProject = ToDoProject("Chores");

    const choresItem = ToDoItem("Take out the trash ", {
        priority: "high",
        dueDate: Date.now(),
        done: false,
    });
    const choresItem2 = ToDoItem("Do laundry", {
        priority: "medium",
        dueDate: new Date(2023, 6, 1),
    });
    const choresItem3 = ToDoItem("Buy groceries", {
        priority: "low",
        dueDate: new Date(2023, 6, 4),
    });

    choresProject.addItem(choresItem);
    choresProject.addItem(choresItem2);
    choresProject.addItem(choresItem3);

    const toDoProject = ToDoProject("To Do Project");

    const toDoItem = ToDoItem("Unspaghettify code", {
        priority: "high",
        dueDate: Date.now(),
        done: false,
    });
    const toDoItem2 = ToDoItem("Add ability to add projects and items", {
        priority: "medium",
        dueDate: new Date(2023, 6, 1),
    });
    const toDoItem3 = ToDoItem("Finish project", {
        priority: "high",
        dueDate: new Date(2023, 6, 4),
    });

    toDoProject.addItem(toDoItem);
    toDoProject.addItem(toDoItem2);
    toDoProject.addItem(toDoItem3);

    ProjectManager.addProject(choresProject);
    ProjectManager.addProject(toDoProject);

    LoadProject(choresProject);
    UpdateProjectTabs(ProjectManager.getProjects());

    flatpickr("#dt-due-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
    });

    return ProjectManager;
}
