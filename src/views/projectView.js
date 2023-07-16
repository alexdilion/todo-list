import elements from "./elements";
import { createTask } from "./taskView";
import sortFunctions from "../models/sortFunctions";

export function loadProject(project) {
    const tasks = project.getTasks();
    const subheader = project.getHeader();
    elements.tasksContainer.innerHTML = "";
    elements.sidebarContainer.setAttribute("data-current-project", project.getProjectIndex());

    if (project.getName() !== "All Tasks") {
        elements.projectSubheader.innerHTML = `${subheader.text}<span class="project-name">${subheader.name}</span>`;
    } else {
        elements.projectSubheader.innerHTML = "Here are <span class='project-name'>all</span> of the tasks you need to do";
    }

    tasks.forEach((task) => {
        createTask(task);
    });

    const selectedOption = project.getSortType();
    elements.sortTasksSelector.innerHTML = "";
    Object.keys(sortFunctions).forEach((key) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;

        if (key === selectedOption) {
            option.selected = true;
        }

        elements.sortTasksSelector.appendChild(option);
    });
}

export function updateHeader(project) {
    const subheader = project.getHeader();

    if (project.getName() !== "All Tasks") {
        elements.projectSubheader.innerHTML = `${subheader.text}<span class="project-name">${subheader.name}</span>`;
    } else {
        elements.projectSubheader.innerHTML = "Here are <span class='project-name'>all</span> of the tasks you need to do";
    }
}
