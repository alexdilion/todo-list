/* eslint-disable prefer-template */
import MicroModal from "micromodal";
import flatpickr from "flatpickr";

import elements from "./views/elements";
import { loadProject } from "./views/projectView";
import { loadTabs } from "./views/tabView";
import { onModalShow } from "./views/formView";
import ProjectManager from "./models/ProjectManager";
import { demoTemplate, emptyTemplate } from "./templates";

function getHeaderText(username) {
    const time = new Date().getHours();
    const nameText = username === "" ? "" : ", ";

    if (time > 17 || time < 5) return "Good evening" + nameText;

    if (time < 12) return "Good morning" + nameText;

    return "Good afternoon" + nameText;
}

export default function load(username, loadType, projects = []) {
    let manager;

    if (loadType === "demo") {
        manager = ProjectManager(demoTemplate());
    } else if (loadType === "empty") {
        manager = ProjectManager(emptyTemplate());
    } else if (loadType === "load") {
        manager = ProjectManager(projects);
    }

    loadTabs(manager.getProjects());
    loadProject(manager.getCurrentProject());

    elements.signupPage.hidden = true;
    elements.mainWrapper.hidden = false;

    elements.pageHeaderName.textContent = username;
    elements.pageHeaderText.textContent = getHeaderText(username);

    MicroModal.init({ onShow: onModalShow });

    flatpickr("#task-due-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
    });

    return manager;
}
