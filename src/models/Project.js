import sortFunctions from "./sortFunctions";

const Project = (projectName, isOverviewProject = false, filterFunction = null) => {
    let tasks = [];
    let name = projectName;
    let projectIndex = 0;
    let sortType = "Descending priority";

    const overviewProject = isOverviewProject;
    const filter = filterFunction;

    const getTask = (taskIndex) => tasks[taskIndex];
    const getTasks = () => tasks;

    const sortTasks = () => {
        sortFunctions[sortType](tasks);

        if (!overviewProject) {
            tasks.forEach((task, index) => {
                task.setProperty("index", index);
            });
        }
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

    const hideTaskDescriptions = () => {
        tasks.forEach((task) => {
            task.setProperty("descriptionToggled", false);
        });
    };

    const updateOverview = (projects) => {
        if (!overviewProject) return;

        clearTasks();

        const filteredTasks = projects
            .filter((p) => !p.isOverview())
            .map((p) => p.getTasks())
            .flat()
            .filter(filter);

        addTasks(filteredTasks);
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
        getFilter,
        setSortType,
        getSortType,
        updateOverview,
        hideTaskDescriptions,
        sortTasks,
    };
};

export default Project;
