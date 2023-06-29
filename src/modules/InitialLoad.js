import ProjectManager from "./ProjectManager";
import ToDoProject from "./ToDoProject";
import ToDoItem from "./ToDoItem";
import LoadProject from "./dom/LoadProject";

// TODO:
// Add default projects for the following categories: Today, This Week & All Tasks

const defaultProject = ToDoProject("Chores");
const test = ToDoItem("Take out the trash ", {
    priority: "high",
    dueDate: Date.now(),
    done: false,
});
const test2 = ToDoItem("Do laundry", {
    priority: "medium",
    dueDate: new Date(2023, 5, 30)
});

defaultProject.addItem(test);
defaultProject.addItem(test2);

LoadProject(defaultProject);
