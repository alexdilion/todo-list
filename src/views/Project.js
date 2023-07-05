import EventManager from "../EventManager";
import TaskView from "./Task";

const Project = (() => {
    const tasksContainer = document.querySelector("#project-tasks");
    const subheaderElement = document.querySelector("#greeting-subheader");

    const taskEditEvent = EventManager();
    const taskDeleteEvent = EventManager();
    const taskToggleDoneEvent = EventManager();

    const loadProject = (project) => {
        const tasks = project.getTasks();
        const subheader = project.getHeader();
        tasksContainer.innerHTML = "";
        tasksContainer.setAttribute("data-current-project", project.getProjectIndex());
        subheaderElement.textContent = subheader.text;
        subheaderElement.innerHTML += `<span class="project-name">${subheader.name}</span>`;

        tasks.forEach((task) => {
            TaskView.createTask(task);
        });
    };

    const initEvents = () => {
        tasksContainer.addEventListener("click", (event) => {
            const { target } = event;
            const taskIndex = target.closest(".project-task").getAttribute("data-task-index");

            if (target.classList.contains("edit-button")) {
                taskEditEvent.trigger({ taskIndex });
            } else if (target.classList.contains("delete-button")) {
                taskDeleteEvent.trigger({ taskIndex });
            } else if (target.classList.contains("task-done")) {
                const { checked } = target;
                taskToggleDoneEvent.trigger({ taskIndex, value: checked });
            }
        });
    };

    const getEvents = () => ({ taskEditEvent, taskDeleteEvent, taskToggleDoneEvent });

    initEvents();

    return {
        loadProject,
        getEvents,
    };
})();

export default Project;
