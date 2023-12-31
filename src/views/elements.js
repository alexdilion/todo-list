const elements = {
    pageHeader: document.querySelector("#page-header"),
    projectHeader: document.querySelector("#project-header"),
    mainWrapper: document.querySelector(".main-wrapper"),
    pageHeaderName: document.querySelector("#header-name"),
    pageHeaderText: document.querySelector("#header-text"),

    signupPage: document.querySelector(".signup-page"),
    signupForm: document.querySelector(".signup-page form"),
    signupFormUsername: document.querySelector("#username"),
    templateButtonsContainer: document.querySelector(".signup-submit-buttons"),
    demoTemplateButton: document.querySelector("#demo-template-button"),
    emptyTemplateButton: document.querySelector("#empty-template-button"),

    newTaskButton: document.querySelector("#new-task"),
    sortTasksSelector: document.querySelector("#project-sort"),
    tasksContainer: document.querySelector("#project-tasks"),

    sidebarContainer: document.querySelector(".sidebar"),
    sidebarCollapse: document.querySelector(".menu-toggle-button"),
    overviewsContainer: document.querySelector("#overview-projects"),
    projectsContainer: document.querySelector("#user-projects"),
    tabTemplate: document.querySelector("#tab-template"),

    projectForm: document.querySelector("#project-form"),
    projectFormModal: document.querySelector("#project-form-modal"),
    projectFormHeader: document.querySelector("#project-form-modal-title"),
    projectFormName: document.querySelector("#project-name"),
    projectFormSubmit: document.querySelector("#add-project"),

    taskFormModal: document.querySelector("#task-form-modal"),
    taskTemplate: document.querySelector("#task-template"),
    taskForm: document.querySelector("#task-form"),
    taskFormTitle: document.querySelector("#task-title"),
    taskFormProjectContainer: document.querySelector("#project-select-container"),
    taskFormProject: document.querySelector("#task-project"),
    taskFormDescription: document.querySelector("#task-description"),
    taskFormPriority: document.querySelector("#task-priority"),
    taskFormDone: document.querySelector("#task-done"),
    taskFormDueDate: document.querySelector("#task-due-date"),
    taskFormSubmit: document.querySelector("#add-task"),
    taskFormHeader: document.querySelector("#task-form-modal-title"),
};

export default elements;
