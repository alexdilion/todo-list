import MicroModal from "micromodal";
import flatpickr from "flatpickr";

import { loadProject } from "./views/projectView";
import { loadTabs } from "./views/tabView";
import { onModalShow } from "./views/formView";
import ProjectManager from "./models/ProjectManager";
import templateProjects from "./template";

export default function load() {
    const projects = ProjectManager(templateProjects());
    loadTabs(projects.getProjects(), projects.getCurrentProject());
    loadProject(projects.getCurrentProject());

    MicroModal.init({ onShow: onModalShow });

    flatpickr("#task-due-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
    });

    return projects;
}
