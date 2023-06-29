import ProjectManager from "./ProjectManager";
import ToDoProject from "./ToDoProject";
import ToDoItem from "./ToDoItem";
import LoadProject from "./dom/LoadProject"

// TODO:
// Add default projects for the following categories: Today, This Week & All Tasks

const defaultProject = ToDoProject("Test");
const test = ToDoItem("Testingh lajsdlkjqw jlkeqwj ekaljsd jaslk daslkd ", 1, "", "high", Date.now());
const test2 = ToDoItem("TEsting", 2, "");
const test3 = ToDoItem("TEsting", 1, "", "medium", new Date(2023, 5, 24), true);

defaultProject.addItem(test);
defaultProject.addItem(test2);
defaultProject.addItem(test3);

LoadProject(defaultProject);