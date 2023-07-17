import { formatDistanceToNowStrict, compareAsc, isValid } from "date-fns";

const Task = (taskProject, taskProperties) => {
    const properties = {
        title: "",
        description: "",
        descriptionToggled: false,
        priority: "none",
        dueDate: null,
        done: false,
        index: null,
    };
    const project = taskProject;

    Object.entries(taskProperties).forEach(([property, value]) => {
        properties[property] = value;
    });

    const getProperty = (property) => properties[property];
    const getProperties = () => properties;
    const getParentProject = () => project;

    const getDueIn = () => {
        if (isValid(properties.dueDate)) {
            const relativeDate = compareAsc(properties.dueDate, Date.now());
            const distanceFromNow = formatDistanceToNowStrict(properties.dueDate);

            return { relativeDate, distanceFromNow };
        }

        return false;
    };

    const setProperty = (property, value) => {
        properties[property] = value;
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
