const Task = (() => {
    const taskContainer = document.querySelector("#project-tasks");

    const updateIndexes = () => {
        const tasks = taskContainer.querySelectorAll(".project-task");

        tasks.forEach((task, index) => {
            task.setAttribute("data-task-index", index);
        });
    };

    const updateTask = (task, taskElement) => {
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
            priorityElement.hidden = false;
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

            dueInElement.hidden = false;
        }

        switch (true) {
            case taskProperties.priority !== "none" && taskProperties.dueDate !== null:
                updatePriority();
                updateDueIn();
                separatorElement.hidden = false;
                break;
            case taskProperties.priority !== "none":
                updatePriority();
                separatorElement.hidden = true;
                break;
            case taskProperties.dueDate !== null:
                updateDueIn();
                separatorElement.hidden = true;
                break;
            default:
                separatorElement.hidden = true;
                priorityElement.hidden = true;
                dueInElement.hidden = true;
                break;
        }

        doneElement.checked = taskProperties.done;
    };

    const createTask = (task) => {
        const taskTemplate = document.querySelector("#task-template");
        const taskElement = taskTemplate.cloneNode(true);

        taskElement.removeAttribute("id");
        updateTask(task, taskElement);
        taskElement.setAttribute("data-task-index", taskContainer.childNodes.length);
        taskContainer.appendChild(taskElement);
    };

    const removeTask = (taskIndex) => {
        document.querySelector("#project-tasks").childNodes[taskIndex].remove();
        updateIndexes();
    };

    return {
        updateTask,
        createTask,
        removeTask,
    };
})();

export default Task;
