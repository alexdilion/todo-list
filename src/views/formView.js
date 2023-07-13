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
