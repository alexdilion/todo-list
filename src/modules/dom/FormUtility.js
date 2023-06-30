function isValidForm(form) {
    return form.querySelectorAll("input[required]:invalid").length === 0;
}

export function getProjectFormData(form) {
    if (!isValidForm(form)) return false;

    return form.querySelector("#project-name").value;
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
    document.querySelector("#dt-due-date")._flatpickr.clear();
}
