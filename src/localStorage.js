import Task from "./models/Task";
import Project from "./models/Project";
import Overview from "./models/Overview";

const storage = window.localStorage;

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
    const username = storage.getItem("username");

    const jsonProjects = JSON.parse(storage.getItem("projects"));
    const projects = [];

    jsonProjects.forEach((jsonProject, index) => {
        projects.push(parseProject(jsonProject, index));
    });

    return { username, projects };
}

export function saveData(username, projects) {
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

export function addProject(project) {
    const projects = JSON.parse(storage.getItem("projects"));
    projects.push(convertProject(project));

    storage.setItem("projects", JSON.stringify(projects));
}

export function editProject(project) {
    const projects = JSON.parse(storage.getItem("projects"));
    projects[project.getProjectIndex()] = convertProject(project);

    storage.setItem("projects", JSON.stringify(projects));
}

export function removeProject(projectIndex) {
    const projects = JSON.parse(storage.getItem("projects"));
    projects.splice(projectIndex, 1);

    storage.setItem("projects", JSON.stringify(projects));

    const updatedTasks = JSON.parse(storage.getItem("tasks")).filter((t) => t.projectIndex !== projectIndex);

    updatedTasks.forEach((t) => {
        if (t.projectIndex > projectIndex) {
            t.projectIndex -= 1;
        }
    });

    storage.setItem("tasks", JSON.stringify(updatedTasks));
}

export function addTask(task) {
    const tasks = JSON.parse(storage.getItem("tasks"));
    tasks.push(convertTask(task));

    storage.setItem("tasks", JSON.stringify(tasks));
}

export function editTask(task) {
    const tasks = JSON.parse(storage.getItem("tasks"));
    const projectIndex = task.getParentProject().getProjectIndex();
    const projectTasks = tasks.filter((t) => t.projectIndex === projectIndex);
    const otherTasks = tasks.filter((t) => t.projectIndex !== projectIndex);

    projectTasks[task.getProperty("index")] = convertTask(task);

    storage.setItem("tasks", JSON.stringify([...projectTasks, ...otherTasks]));
}

export function deleteTask(task) {
    const tasks = JSON.parse(storage.getItem("tasks"));
    const projectIndex = task.getParentProject().getProjectIndex();
    const projectTasks = tasks.filter((t) => t.projectIndex === projectIndex);
    const otherTasks = tasks.filter((t) => t.projectIndex !== projectIndex);

    projectTasks.splice(task.getProperty("index"), 1);

    storage.setItem("tasks", JSON.stringify([...projectTasks, ...otherTasks]));
}
