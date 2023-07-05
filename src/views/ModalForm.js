import EventManager from "../EventManager";

const ModalForm = (() => {
    const TASK_FORM = document.querySelector("#task-form");
    const PROJECT_FORM = document.querySelector("#project-form");

    const submitFormEvent = EventManager();

    const isValidForm = (form) => form.querySelectorAll("input[required]:invalid").length === 0;

    const getTaskData = () => {
        if (!isValidForm(TASK_FORM)) return false;

        const formData = {};

        formData.title = TASK_FORM.querySelector("#task-title").value;
        formData.description = TASK_FORM.querySelector("#task-description").value;
        formData.priority = TASK_FORM.querySelector("#task-priority").value;
        formData.done = TASK_FORM.querySelector("#task-done").checked;

        if (TASK_FORM.querySelector("#task-due-date").value !== "") {
            formData.dueDate = new Date(TASK_FORM.querySelector("#task-due-date").value);
        } else {
            formData.dueDate = null;
        }

        return formData;
    };

    const getProjectData = () => {
        if (!isValidForm(PROJECT_FORM)) return false;

        const formData = {};
        formData.name = PROJECT_FORM.querySelector("#project-name").value;

        return formData;
    };

    const resetInputs = (form) => {
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
        document.querySelector("#task-due-date")._flatpickr.clear();
    };

    const initEvents = () => {
        const taskFormSubmit = TASK_FORM.querySelector("button[type='submit']");
        const projectFormSubmit = PROJECT_FORM.querySelector("button[type='submit']");
        const cancelButtons = document.querySelectorAll("[data-micromodal-close]");

        taskFormSubmit.addEventListener("click", (event) => {
            event.preventDefault();
            const data = getTaskData();
            if (!data) return;

            submitFormEvent.trigger({ type: "addTask", data });
            resetInputs(taskFormSubmit);
            TASK_FORM.closest(".modal-overlay").click();
        });

        projectFormSubmit.addEventListener("click", (event) => {
            event.preventDefault();
            const data = getProjectData();
            if (!data) return;

            submitFormEvent.trigger({ type: "addProject", data });
            resetInputs(projectFormSubmit);
            PROJECT_FORM.closest(".modal-overlay").click();
        });

        cancelButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
                if (!event.target.hasAttribute("data-micromodal-close")) return;

                resetInputs(TASK_FORM);
                resetInputs(PROJECT_FORM);
            });
        });
    };

    initEvents();

    const getEvents = () => ({ submitFormEvent });

    return {
        resetInputs,
        getEvents,
    };
})();

export default ModalForm;
