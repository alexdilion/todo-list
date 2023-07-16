import elements from "./elements";

function isValidForm(form) {
    return form.querySelectorAll("input[required]:invalid").length === 0;
}

export function getFormData(form) {
    if (!isValidForm(form)) return false;

    const formData = {};

    if (form.id === "task-form") {
        formData.title = elements.taskFormTitle.value;
        formData.description = elements.taskFormDescription.value;
        formData.priority = elements.taskFormPriority.value;
        formData.done = elements.taskFormDone.checked;
        formData.dueDate = null;
        formData.projectIndex = null;

        if (elements.taskFormDueDate.value !== "") {
            formData.dueDate = new Date(elements.taskFormDueDate.value);
        }

        if (!elements.taskFormProjectContainer.classList.contains("display-none")) {
            formData.projectIndex = elements.taskFormProject.value;
        }
    } else if (form.id === "project-form") {
        formData.name = elements.projectFormName.value;
    }

    return formData;
}

export function resetInputs(form) {
    const textInputs = form.querySelectorAll("input[type='text'], textarea");
    const comboBoxes = form.querySelectorAll("select");
    const checkBoxes = form.querySelectorAll("input[type='checkbox']");

    textInputs.forEach((input) => {
        input.value = "";
    });

    comboBoxes.forEach((combo) => {
        combo.querySelectorAll("option").forEach((option) => {
            if (option.hasAttribute("selected")) {
                combo.value = option.value;
            }
        });
    });

    checkBoxes.forEach((checkBox) => {
        checkBox.checked = false;
    });

    // eslint-disable-next-line no-underscore-dangle
    elements.taskFormDueDate._flatpickr.clear();
}

export function loadProjectSelectOptions(projects) {
    elements.taskFormProject.innerHTML = "";

    projects.forEach((project, index) => {
        if (project.isOverview()) return;

        const option = document.createElement("option");
        option.value = index;
        option.textContent = project.getName();
        elements.taskFormProject.appendChild(option);
    });
}

export function loadProjectProperties(project) {
    elements.projectFormName.value = project.getName();
}

export function loadTaskProperties(task, projects = false) {
    const properties = task.getProperties();

    elements.taskFormTitle.value = properties.title;
    elements.taskFormDescription.value = properties.description ? properties.description : "";
    elements.taskFormPriority.value = properties.priority;
    elements.taskFormDone.checked = properties.done;

    if (projects) {
        elements.taskFormProject.innerHTML = "";

        projects.forEach((project, index) => {
            if (project.isOverview()) return;

            const option = document.createElement("option");
            option.value = index;
            option.textContent = project.getName();

            if (task.getParentProject().getProjectIndex() === index) {
                option.selected = true;
            }

            elements.taskFormProject.appendChild(option);
        });
    }

    if (properties.dueDate) {
        // eslint-disable-next-line no-underscore-dangle
        elements.taskFormDueDate._flatpickr.setDate(properties.dueDate);
    }
}

export function onModalShow(modal, trigger) {
    const type = trigger.getAttribute("data-form-type");

    if (type === "new") {
        if (modal.id === "project-form-modal") {
            elements.projectFormHeader.textContent = "New Project";
            elements.projectFormSubmit.textContent = "Add";
            elements.projectForm.setAttribute("data-form-type", "new");
        } else if (modal.id === "task-form-modal") {
            elements.taskFormHeader.textContent = "New Task";
            elements.taskFormSubmit.textContent = "Add";
            elements.taskForm.setAttribute("data-form-type", "new");
        }
    }

    if (type === "edit") {
        if (modal.id === "project-form-modal") {
            elements.projectFormHeader.textContent = "Edit Project";
            elements.projectFormSubmit.textContent = "Edit";
            elements.projectForm.setAttribute("data-form-type", "edit");
        } else if (modal.id === "task-form-modal") {
            elements.taskFormHeader.textContent = "Edit Task";
            elements.taskFormSubmit.textContent = "Edit";
            elements.taskForm.setAttribute("data-form-type", "edit");
        }
    }
}
