import MicroModal from "micromodal";
import flatpickr from "flatpickr";

import "./style/style.css";
import "./style/form.css";
import "flatpickr/dist/flatpickr.css";

import Controller from "./controllers/Controller";

MicroModal.init();

flatpickr("#task-due-date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
});

const app = Controller();
