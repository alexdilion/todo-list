export default function UpdateItem(item, itemElement) {
    const itemProperties = item.getProperties();
    const infoElement = itemElement.querySelector(".item-info");
    const priorityElement = infoElement.querySelector(".item-priority");
    const dueInElement = infoElement.querySelector(".item-due-in");
    const separatorElement = infoElement.querySelector(".horizontal-separator");
    const doneElement = itemElement.querySelector(".item-done");

    itemElement.querySelector(".item-header").textContent = itemProperties.title;

    function updatePriority() {
        priorityElement.classList.add(`${itemProperties.priority}-priority`);
        priorityElement.textContent = itemProperties.priority;
        priorityElement.classList.remove("display-none");
    }

    function updateDueIn() {
        const dueIn = item.getDueIn();

        if (dueIn) {
            if (dueIn.relativeDate === 1) {
                dueInElement.textContent = `Due in ${dueIn.distanceFromNow}`;
            } else if (dueIn.relativeDate === -1 && dueIn.distanceFromNow !== "0 seconds") {
                dueInElement.textContent = `Overdue ${dueIn.distanceFromNow}`;
            } else {
                dueInElement.textContent = "Due now!!"
            }
        }

        dueInElement.classList.remove("display-none");
    }

    switch (true) {
        case itemProperties.priority !== "" && itemProperties.dueDate !== null:
            updatePriority();
            updateDueIn();
            separatorElement.classList.remove("display-none");
            break;

        case itemProperties.priority !== "":
            updatePriority();
            separatorElement.classList.add("display-none");
            break;

        case itemProperties.dueDate !== null:
            updateDueIn();
            separatorElement.classList.add("display-none");
            break;

        default:
            separatorElement.classList.add("display-none");
            priorityElement.classList.add("display-none");
            dueInElement.classList.add("display-none");
            break;
    }

    doneElement.checked = itemProperties.done;
}
