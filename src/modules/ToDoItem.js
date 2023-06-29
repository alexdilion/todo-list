import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import compareAsc from "date-fns/compareAsc";

const ToDoItem = (itemTitle, itemProperties = {}) => {
    const properties = {
        title: itemTitle,
        description: "",
        priority: "",
        dueDate: null,
        done: false,
    };

    Object.entries(itemProperties).forEach(([property, value]) => {
        properties[property] = value;
    });

    const getProperty = (property) => properties[property];
    const getProperties = () => properties;

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
    };

    return {
        getProperty,
        getProperties,
        getDueIn,
        setProperty,
    };
};

export default ToDoItem;
