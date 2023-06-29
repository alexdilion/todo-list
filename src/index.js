import MicroModal from "micromodal";
import flatpickr from "flatpickr";

import ToDoItem from "./modules/ToDoItem";
import ToDoProject from "./modules/ToDoProject";
import ProjectManager from "./modules/ProjectManager";
import CreateItem from "./modules/dom/CreateItem";
import InitialLoad from "./modules/InitialLoad"

import "./style/style.css";
import "./style/form.css";
import "flatpickr/dist/flatpickr.css";

MicroModal.init();
flatpickr("#dt-due-date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
});
