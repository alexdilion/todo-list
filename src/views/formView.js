import elements from "./elements";

const { taskFormTitle, taskFormDescription, taskFormPriority, taskFormDone, taskFormDueDate } = elements;
const { projectFormName } = elements;

function isValidForm(form) {
    return form.querySelectorAll("input[required]:invalid").length === 0;
}

export function getFormData(form) {
    if (!isValidForm(form)) return false;

    const formData = {};

    if (form.id === "task-form") {
        formData.title = taskFormTitle.value;
        formData.description = taskFormDescription.value;
        formData.priority = taskFormPriority.value;
        formData.done = taskFormDone.checked;

        if (taskFormDueDate.value !== "") {
            formData.dueDate = new Date(taskFormDueDate.value);
        } else {
            formData.dueDate = null;
        }
    } else if (form.id === "project-form") {
        formData.name = projectFormName.value;
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
    taskFormDueDate._flatpickr.clear();
}

export function onModalShow(modal, trigger) {
    const type = trigger.getAttribute("data-form-type");

    if (type === "new") {
        if (modal.id === "project-form-modal") {
            elements.projectFormHeader.textContent = "New Project";
            elements.projectFormSubmit.textContent = "Add";
        } else if (modal.id === "task-form-modal") {
            elements.taskFormHeader.textContent = "New Task";
            elements.taskFormSubmit.textContent = "Add";
        }
    }

    if (type === "edit") {
        if (modal.id === "project-form-modal") {
            elements.projectFormHeader.textContent = "Edit Project";
            elements.projectFormSubmit.textContent = "Edit";
        } else if (modal.id === "task-form-modal") {
            elements.taskFormHeader.textContent = "Edit Task";
            elements.taskFormSubmit.textContent = "Edit";
        }
    }
}
