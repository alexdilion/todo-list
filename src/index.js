import "./style/style.css";
import "./style/form.css";
import "flatpickr/dist/flatpickr.css";

import MicroModal from "micromodal";
import * as FormUtility from "./modules/dom/FormUtility";
import InitialLoad from "./modules/InitialLoad";
import ToDoProject from "./modules/ToDoProject";
import UpdateProjectTabs from "./modules/dom/UpdateProjectTabs";

const ProjectManager = InitialLoad();

const PROJECT_SUBMIT_BUTTON = document.querySelector("#add-project");
const ITEM_ADD_BUTTON = document.querySelector("#add-task");

MicroModal.init({ onClose: (modal) => FormUtility.resetForm(modal) });

PROJECT_SUBMIT_BUTTON.addEventListener("click", (event) => {
    event.preventDefault();

    const form = event.target.closest("form");
    const modal = PROJECT_SUBMIT_BUTTON.closest(".modal");
    const projectName = FormUtility.getProjectFormData(form);

    if (!projectName) return;
    if (ProjectManager.isInvalidName(projectName)) return;

    const newProject = ToDoProject(projectName);
    ProjectManager.addProject(newProject);
    UpdateProjectTabs(ProjectManager.getProjects());
    
    FormUtility.resetForm(modal);
    MicroModal.close(modal.id);
});
