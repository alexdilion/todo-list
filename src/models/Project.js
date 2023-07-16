const Project = (projectName, isOverviewProject = false, filterFunction = null) => {
    let tasks = [];
    let name = projectName;
    let projectIndex = 0;

    const overviewProject = isOverviewProject;
    const filter = filterFunction;

    const getTask = (taskIndex) => tasks[taskIndex];
    const getTasks = () => tasks;

    const addTask = (task) => {
        if (!overviewProject) {
            task.setProperty("index", tasks.length);
        }

        tasks.push(task);
    };

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
    };

    const deleteTask = (taskIndex) => {
        if (overviewProject) {
            const task = getTask(taskIndex);
            task.getParentProject().deleteTask(task.getProperty("index"));
            return;
        }

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
