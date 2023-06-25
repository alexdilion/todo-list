export default function UpdateItem(item, itemElement) {
    const itemProperties = item.getProperties();
    const infoElement = itemElement.querySelector(".item-info");
    const priorityElement = infoElement.querySelector(".item-priority");
    const dueInElement = infoElement.querySelector(".item-due-in");
    const separatorElement = infoElement.querySelector(".horizontal-separator");
    const doneElement = itemElement.querySelector(".item-done")

    itemElement.querySelector(".item-header").textContent = itemProperties.title;

    function setPriorityElementProps() {
        priorityElement.classList.add(`${itemProperties.priority}-priority`);
        priorityElement.textContent = itemProperties.priority;
        priorityElement.classList.remove("display-none");
    }

    // TO DO: Update with getDueIn method when that's added
    function setDueInElementProps() {
        dueInElement.textContent = "Due in 3 days";
        dueInElement.classList.remove("display-none");
    }

    switch (true) {
        case itemProperties.priority !== "" && itemProperties.dueDate !== null:
            setPriorityElementProps();
            setDueInElementProps();
            separatorElement.classList.remove("display-none");
            break;

        case itemProperties.priority !== "":
            setPriorityElementProps();
            separatorElement.classList.add("display-none");
            break;

        case itemProperties.dueDate !== null:
            setDueInElementProps();
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
