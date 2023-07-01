function isValidForm(form) {
    return form.querySelectorAll("input[required]:invalid").length === 0;
}

export function getProjectFormData(form) {
    if (!isValidForm(form)) return false;

    const formData = {};
    formData.name = form.querySelector("#project-name").value;

    return formData;
}

export function getItemFormData(form) {
    if (!isValidForm(form)) return false;

    const formData = {};

    formData.title = form.querySelector("#item-title").value;
    formData.description = form.querySelector("#item-description").value;
    formData.priority = form.querySelector("#item-priority").value;
    formData.done = form.querySelector("#item-done").checked;

    formData.dueDate = form.querySelector("#item-due-date").value !== "" ? new Date(form.querySelector("#item-due-date").value) : null;

    return formData;
}

export function resetForm(modal) {
    const FORM = modal.querySelector("form");
    const textInputs = FORM.querySelectorAll("input[type='text'], textarea");
    const comboBoxes = FORM.querySelectorAll("select");
    const checkBoxes = FORM.querySelectorAll("input[type='checkbox']");

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
    document.querySelector("#item-due-date")._flatpickr.clear();
}
