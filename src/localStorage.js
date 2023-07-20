import Task from "./models/Task";
import Project from "./models/Project";
import Overview from "./models/Overview";

function convertTask(task) {
    const taskData = {};
    taskData.projectIndex = task.getParentProject().getProjectIndex();
    taskData.properties = task.getProperties();
    return taskData;
}

function convertProject(project) {
    const projectData = {};
    projectData.name = project.getName();
    projectData.sortType = project.getSortType();
    projectData.isOverview = project.isOverview();

    return projectData;
}

function parseTask(jsonTask, parentProject) {
    const { properties } = jsonTask;

    properties.dueDate = properties.dueDate ? new Date(properties.dueDate) : null;

    const task = Task(parentProject, properties);

    return task;
}

function parseProject(jsonProject, index) {
    const project = jsonProject.isOverview ? Overview(jsonProject.name) : Project(jsonProject.name);

    project.setSortType(jsonProject.sortType);

    if (project.isOverview()) return project;

    const jsonTasks = JSON.parse(window.localStorage.getItem("tasks")).filter((task) => task.projectIndex === index);

    jsonTasks.forEach((jsonTask) => {
        project.addTask(parseTask(jsonTask, project));
    });

    return project;
}

export function loadData() {
    const storage = window.localStorage;

    if (!storage) return false;

    const username = storage.getItem("username");

    const jsonProjects = JSON.parse(storage.getItem("projects"));
    const projects = [];

    jsonProjects.forEach((jsonProject, index) => {
        projects.push(parseProject(jsonProject, index));
    });

    return { username, projects };
}

export function saveData(username, projects) {
    const storage = window.localStorage;

    if (!storage) return;

    storage.setItem("username", username);

    const convertedProjects = [];
    const convertedTasks = [];

    projects.forEach((project) => {
        const jsonProject = convertProject(project);

        if (!jsonProject) return;

        convertedProjects.push(jsonProject);

        if (jsonProject.isOverview) return;

        const tasks = project.getTasks();

        tasks.forEach((task) => {
            convertedTasks.push(convertTask(task));
        });
    });

    storage.setItem("projects", JSON.stringify(convertedProjects));
    storage.setItem("tasks", JSON.stringify(convertedTasks));
}
