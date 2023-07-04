import EventManager from "../EventManager";
import { createTask } from "./TaskUtility";

const Project = (() => {
    const tasksContainer = document.querySelector("#project-tasks");
    const subheaderElement = document.querySelector("#greeting-subheader");

    // events: sort project; edit and remove task

    const loadProject = (project) => {
        const tasks = project.getTasks();
        const subheader = project.getHeader();
        tasksContainer.innerHTML = "";
        tasksContainer.setAttribute("data-current-project", project.getProjectIndex());
        subheaderElement.textContent = subheader.text;
        subheaderElement.innerHTML += `<span class="project-name">${subheader.name}</span>`;

        tasks.forEach((task) => {
            createTask(task);
        });
    };

    return {
        loadProject,
    };
})();

export default Project;
