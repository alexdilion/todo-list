import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import compareAsc from "date-fns/compareAsc";

const Task = (taskProject, taskProperties) => {
    const properties = {
        title: "",
        description: "",
        priority: "none",
        dueDate: null,
        done: false,
    };
    const project = taskProject;

    Object.entries(taskProperties).forEach(([property, value]) => {
        properties[property] = value;
    });

    const getProperty = (property) => properties[property];
    const getProperties = () => properties;
    const getParentProject = () => project;

    const getDueIn = () => {
        if (properties.dueDate !== null) {
            const relativeDate = compareAsc(properties.dueDate, Date.now());
            const distanceFromNow = formatDistanceToNowStrict(properties.dueDate);

            return { relativeDate, distanceFromNow };
        }

        return false;
    };

    const setProperty = (property, value) => {
        properties[property] = value;
        console.log("Task property changed");
    };

    return {
        getProperty,
        getProperties,
        getDueIn,
        setProperty,
        getParentProject,
    };
};

export default Task;
