/* eslint-disable import/prefer-default-export */
import elements from "./elements";
import { createTask } from "./taskView";

const { tasksContainer, subheaderElement, sidebarContainer } = elements;

export function loadProject(project) {
    const tasks = project.getTasks();
    const subheader = project.getHeader();
    tasksContainer.innerHTML = "";
    sidebarContainer.setAttribute("data-current-project", project.getProjectIndex());

    if (project.getName() !== "All Tasks") {
        subheaderElement.innerHTML = `${subheader.text}<span class="project-name">${subheader.name}</span>`;
    } else {
        subheaderElement.innerHTML = "Here are <span class='project-name'>all</span> of the tasks you need to do";
    }

    tasks.forEach((task) => {
        createTask(task);
    });
}

export function updateHeader(project) {
    const subheader = project.getHeader();

    if (project.getName() !== "All Tasks") {
        subheaderElement.innerHTML = `${subheader.text}<span class="project-name">${subheader.name}</span>`;
    } else {
        subheaderElement.innerHTML = "Here are <span class='project-name'>all</span> of the tasks you need to do";
    }
}
