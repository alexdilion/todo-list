import sortFunctions from "./sortFunctions";

const Project = (projectName) => {
    let tasks = [];
    let name = projectName;
    let projectIndex = 0;
    let sortType = "Descending priority";

    const getTask = (taskIndex) => tasks[taskIndex];
    const getTasks = () => tasks;

    const sortTasks = () => {
        sortFunctions[sortType](tasks);

        tasks.forEach((task, index) => {
            task.setProperty("index", index);
        });
    };

    const setSortType = (value) => {
        sortType = value;
        sortTasks();
    };

    const getSortType = () => sortType;

    const addTask = (task) => {
        tasks.push(task);
    };

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
        sortTasks();
    };

    const deleteTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);

        tasks.forEach((task, index) => {
            task.setProperty("index", index);
        });
    };

    const clearTasks = () => {
        tasks = [];
    };

    const getName = () => name;
    const setName = (value) => {
        name = value;
    };

    const getProjectIndex = () => projectIndex;
    const setProjectIndex = (newIndex) => {
        projectIndex = newIndex;
    };

    const getHeader = () => ({ name, text: "Here are the tasks in " });

    const isOverview = () => false;

    const hideTaskDescriptions = () => {
        tasks.forEach((task) => {
            task.setProperty("descriptionToggled", false);
        });
    };

    return {
        getTask,
        getTasks,
        addTask,
        addTasks,
        deleteTask,
        clearTasks,
        getProjectIndex,
        setProjectIndex,
        getName,
        setName,
        getHeader,
        isOverview,
        setSortType,
        getSortType,
        hideTaskDescriptions,
        sortTasks,
    };
};

export default Project;
