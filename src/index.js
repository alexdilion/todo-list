import ToDoItem from "./modules/ToDoItem";
import ToDoList from "./modules/ToDoList";
import ToDoProject from "./modules/ToDoProject";
import CreateItem from "./modules/dom/CreateItem";
import "./style/style.css";

const test = ToDoItem(
    "TEsting",
    1,
    "",
    "high",
    Date.now()
)

const test2 = ToDoItem(
    "TEsting",
    2,
    "",
)

const test3 = ToDoItem(
    "TEsting",
    1,
    "",
    "medium",
    new Date(2023, 5, 24),
    true
)

CreateItem(test);
CreateItem(test2)
CreateItem(test3)
