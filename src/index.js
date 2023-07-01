import "./style/style.css";
import "./style/form.css";
import "flatpickr/dist/flatpickr.css";

import MicroModal from "micromodal";
import * as FormUtility from "./modules/dom/FormUtility";
import InitialLoad from "./modules/InitialLoad";
import ToDoProject from "./modules/ToDoProject";
import ToDoItem from "./modules/ToDoItem";
import UpdateProjectTabs from "./modules/dom/UpdateProjectTabs";
import CreateItem from "./modules/dom/CreateItem";

const ProjectManager = InitialLoad();

const PROJECT_SUBMIT_BUTTON = document.querySelector("#add-project");
const ITEM_ADD_BUTTON = document.querySelector("#add-item");

MicroModal.init({ onClose: (modal) => FormUtility.resetForm(modal) });

function onAddProject(event) {
    const form = event.target.closest("form");
    const modal = PROJECT_SUBMIT_BUTTON.closest(".modal");
    const projectData = FormUtility.getProjectFormData(form);

    if (!projectData) return;
    if (ProjectManager.isInvalidName(projectData.name)) return;

    const newProject = ToDoProject(projectData.name);
    ProjectManager.addProject(newProject);
    UpdateProjectTabs(ProjectManager.getProjects());

    FormUtility.resetForm(modal);

    // Using MicroModal's close method will lock all modal triggers to the current modal
    // So I'm simulating a click on the overlay to close
    modal.querySelector(".modal-overlay").click();
}

function onAddItem(event) {
    const form = event.target.closest("form");
    const modal = ITEM_ADD_BUTTON.closest(".modal");
    const itemData = FormUtility.getItemFormData(form);

    if (!itemData) return;

    const newItem = ToDoItem(itemData.title, { ...itemData });
    ProjectManager.getCurrentProject().addItem(newItem);
    CreateItem(newItem)

    FormUtility.resetForm(modal);
    modal.querySelector(".modal-overlay").click();
}

PROJECT_SUBMIT_BUTTON.addEventListener("click", (event) => {
    event.preventDefault();

    onAddProject(event);
});

ITEM_ADD_BUTTON.addEventListener("click", (event) => {
    event.preventDefault();

    onAddItem(event);
});
