const Project = (projectName, isOverviewProject = false, filterFunction = null) => {
    let tasks = [];
    let name = projectName;
    let projectIndex = 0;

    const overviewProject = isOverviewProject;
    const filter = filterFunction;

    const getTask = (taskIndex) => tasks[taskIndex];
    const getTasks = () => tasks;

    const addTask = (task) => {
        tasks.push(task);
    };

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
    };

    const deleteTask = (taskIndex) => {
        tasks.splice(taskIndex, taskIndex + 1);
    };

    const clearTasks = () => {
        tasks = [];
    };

    const getName = () => name;
    const setName = (value) => {
        console.log("Project name changed");
        name = value;
    };

    const getProjectIndex = () => projectIndex;
    const setProjectIndex = (newIndex) => {
        console.log("Project index changed");
        projectIndex = newIndex;
    };

    const getHeader = () => {
        if (overviewProject) {
            return { name: name.toLowerCase(), text: "Here are the tasks you need to do " };
        }

        return { name, text: "Here are the tasks in " };
    };

    const isOverview = () => overviewProject;
    const getFilter = () => filter;

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
        getFilter,
    };
};

export default Project;
