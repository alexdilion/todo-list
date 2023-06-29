import CreateItem from "./CreateItem";

export default function LoadProject(project) {
    const items = project.getItems();

    // TODO:
    // Update project page header

    items.forEach((item) => {
        CreateItem(item);
    });
}
