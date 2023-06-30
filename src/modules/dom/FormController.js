import flatpickr from "flatpickr";

const DATE_PICKER = flatpickr("#dt-due-date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
});

export function resetItemForm() {
    const FORM = document.querySelector("#item-form");
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

    checkBoxes.forEach(checkBox => {
        checkBox.checked = false;
    });

    DATE_PICKER.clear();
}

export function resetProjectForm() {
    const FORM = document.querySelector("#project-form");
    FORM.querySelector("input").value = "";
};

// TO DO
// Add functions to load item and project information for editing

