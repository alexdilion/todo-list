const elements = {
    subheaderElement: document.querySelector("#greeting-subheader"),

    tasksContainer: document.querySelector("#project-tasks"),

    overviewsContainer: document.querySelector("#overview-projects"),
    projectsContainer: document.querySelector("#user-projects"),
    tabTemplate: document.querySelector("#tab-template"),

    projectModal: document.querySelector("#project-form-modal"),
    projectForm: document.querySelector("#project-form"),
    projectFormHeader: document.querySelector("#project-form-modal-title"),
    projectFormName: document.querySelector("#project-name"),
    projectFormSubmit: document.querySelector("#add-project"),

    taskModal: document.querySelector("#task-form-modal"),
    taskForm: document.querySelector("#task-form"),
    taskFormTitle: document.querySelector("#task-done"),
    taskFormDescription: document.querySelector("#task-description"),
    taskFormPriority: document.querySelector("#task-priority"),
    taskFormDone: document.querySelector("#task-done"),
    taskFormDueDate: document.querySelector("#task-due-date"),
    taskFormSubmit: document.querySelector("#add-task"),
    taskFormHeader: document.querySelector("#task-form-modal-title"),
};

export default elements;
