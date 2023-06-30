import UpdateItem from "./UpdateItem";

const ITEM_CONTAINER = document.querySelector("#project-items");
const ITEM_TEMPLATE = document.querySelector("#item-template");

export default function CreateItem(item) {
    const itemProperties = item.getProperties();
    const itemElement = ITEM_TEMPLATE.cloneNode(true);

    itemElement.removeAttribute("id"); // Remove template id
    itemElement.setAttribute("data-item-index", itemProperties.id);

    UpdateItem(item, itemElement);

    ITEM_CONTAINER.appendChild(itemElement);
}
