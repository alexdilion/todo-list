export function updateTask(task, taskElement) {
    const taskProperties = task.getProperties();
    const infoElement = taskElement.querySelector(".task-info");
    const priorityElement = infoElement.querySelector(".task-priority");
    const dueInElement = infoElement.querySelector(".task-due-in");
    const separatorElement = infoElement.querySelector(".horizontal-separator");
    const doneElement = taskElement.querySelector(".task-done");

    taskElement.querySelector(".task-header").textContent = taskProperties.title;

    function updatePriority() {
        priorityElement.classList.add(`${taskProperties.priority}-priority`);
        priorityElement.textContent = taskProperties.priority;
        priorityElement.classList.remove("display-none");
    }

    function updateDueIn() {
        const dueIn = task.getDueIn();

        if (dueIn) {
            if (dueIn.relativeDate === 1) {
                dueInElement.textContent = `Due in ${dueIn.distanceFromNow}`;
            } else if (dueIn.relativeDate === -1 && dueIn.distanceFromNow !== "0 seconds") {
                dueInElement.textContent = `Overdue ${dueIn.distanceFromNow}`;
            } else {
                dueInElement.textContent = "Due now!!";
            }
        }

        dueInElement.classList.remove("display-none");
    }

    switch (true) {
        case taskProperties.priority !== "none" && taskProperties.dueDate !== null:
            updatePriority();
            updateDueIn();
            separatorElement.classList.remove("display-none");
            break;

        case taskProperties.priority !== "none":
            updatePriority();
            separatorElement.classList.add("display-none");
            break;

        case taskProperties.dueDate !== null:
            updateDueIn();
            separatorElement.classList.add("display-none");
            break;

        default:
            separatorElement.classList.add("display-none");
            priorityElement.classList.add("display-none");
            dueInElement.classList.add("display-none");
            break;
    }

    doneElement.checked = taskProperties.done;
}

export function createTask(task) {
    const taskContainer = document.querySelector("#project-tasks");
    const taskTemplate = document.querySelector("#task-template");

    const taskProperties = task.getProperties();
    const taskElement = taskTemplate.cloneNode(true);

    taskElement.removeAttribute("id"); // Remove template id
    taskElement.setAttribute("data-task-index", taskProperties.id);

    updateTask(task, taskElement);

    taskContainer.appendChild(taskElement);
}
