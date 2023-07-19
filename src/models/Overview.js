import sortFunctions from "./sortFunctions";
import Project from "./Project";

const Overview = (projectName, filterFunction = () => true) => {
    const filter = filterFunction;
    let sortType = "Descending priority";

    const { getTask, getTasks, addTask, getName, getProjectIndex, setProjectIndex, hideTaskDescriptions, clearTasks } =
        Project(projectName);

    const sortTasks = () => {
        sortFunctions[sortType](getTasks());
    };

    const setSortType = (value) => {
        sortType = value;
        sortTasks();
    };

    const getSortType = () => sortType;

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
        sortTasks();
    };

    const isOverview = () => true;
    const getHeader = () => ({ name: getName(), text: "Here are the tasks you need to do " });
    const getFilter = () => filter;

    const deleteTask = (taskIndex) => {
        const task = getTask(taskIndex);
        task.getParentProject().deleteTask(task.getProperty("index"));
    };

    const updateOverview = (projects) => {
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
        setSortType,
        getSortType,
        addTask,
        addTasks,
        getName,
        getProjectIndex,
        setProjectIndex,
        getFilter,
        hideTaskDescriptions,
        isOverview,
        getHeader,
        sortTasks,
        clearTasks,
        deleteTask,
        updateOverview,
    };
};

export default Overview;
