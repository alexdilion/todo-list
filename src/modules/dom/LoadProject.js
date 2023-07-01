import CreateItem from "./CreateItem";

const SUBHEADER = document.querySelector("#greeting-subheader");
const PROJECT_ITEMS = document.querySelector("#project-items");

export default function LoadProject(project) {
    const items = project.getItems();
    const header = project.getHeader();

    PROJECT_ITEMS.innerHTML = "";
    PROJECT_ITEMS.setAttribute("data-current-project", project.getIndex());

    SUBHEADER.textContent = header.text;
    SUBHEADER.innerHTML += `<span class="project-name">${header.name}</span>`;

    items.forEach((item) => {
        CreateItem(item);
    });
}
