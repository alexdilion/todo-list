import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import compareAsc from "date-fns/compareAsc";
import EventManager from "../EventManager";

const Task = (taskProject, taskProperties) => {
    const properties = {
        title: "",
        description: "",
        priority: "none",
        dueDate: null,
        done: false,
    };
    const project = taskProject;

    const propertyChangedEvent = EventManager();

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
        propertyChangedEvent.trigger({ property, value });
    };

    const getEvents = () => ({ propertyChangedEvent });

    return {
        getProperty,
        getProperties,
        getDueIn,
        setProperty,
        getEvents,
        getParentProject,
    };
};

export default Task;
