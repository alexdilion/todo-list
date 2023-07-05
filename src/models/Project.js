import EventManager from "../EventManager";

const Project = (projectName, isDefault = false) => {
    const tasks = [];
    let name = projectName;
    let projectIndex = 0;
    let listening = false;
    const defaultProject = isDefault;

    const taskAddedEvent = EventManager();
    const taskDeletedEvent = EventManager();
    const projectRenamedEvent = EventManager();

    const getTask = (taskIndex) => tasks[taskIndex];
    const getTasks = () => tasks;

    const addTask = (task) => {
        tasks.push(task);
        taskAddedEvent.trigger({ task });
    };

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
    };

    const deleteTask = (taskIndex) => {
        if (tasks.length < 1) return;

        taskDeletedEvent.trigger({ taskIndex });
        tasks.splice(taskIndex, taskIndex + 1);
    };

    const getName = () => name;
    const setName = (value) => {
        name = value;
        projectRenamedEvent.trigger({ name });
    };

    const getProjectIndex = () => projectIndex;
    const setProjectIndex = (newIndex) => {
        projectIndex = newIndex;
    };

    const getHeader = () => {
        if (defaultProject) {
            if (name === "All Tasks") return { name: "", text: "Here are all of the tasks you need to do" };

            return { name: name.toLowerCase(), text: "Here are the tasks you need to do " };
        }

        return { name, text: "Here are the tasks in " };
    };

    const getEvents = () => ({ taskAddedEvent, taskDeletedEvent, projectRenamedEvent });
    const isListening = () => listening;
    const setListening = () => {
        listening = true;
    };

    return {
        getTask,
        getTasks,
        addTask,
        addTasks,
        deleteTask,
        getProjectIndex,
        setProjectIndex,
        getName,
        setName,
        getHeader,
        getEvents,
        isListening,
        setListening,
    };
};

export default Project;
