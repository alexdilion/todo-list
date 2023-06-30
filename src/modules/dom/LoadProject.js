import CreateItem from "./CreateItem";

const SUBHEADER = document.querySelector("#greeting-subheader")

export default function LoadProject(project) {
    const items = project.getItems();
    const header = project.getHeader();

    SUBHEADER.textContent = header.text;
    SUBHEADER.innerHTML += `<span class="project-name">${header.name}</span>`

    items.forEach((item) => {
        CreateItem(item);
    });
}
