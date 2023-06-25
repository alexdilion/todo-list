import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import isValid from "date-fns/isValid";
import compareAsc from "date-fns/compareAsc";

const ToDoItem = (itemTitle, itemId, itemDescription = "", itemPriority = "", itemDue = null, itemDone = false) => {
    const properties = {
        title: itemTitle,
        id: itemId,
        description: itemDescription,
        priority: itemPriority,
        dueDate: itemDue,
        done: itemDone,
    };

    const getProperty = (property) => properties[property];
    const getProperties = () => properties;

    const getDueIn = () => {
        if (isValid(properties.dueDate)) {
            const relativeDate = compareAsc(properties.dueDate, Date.now());
            const distanceFromNow = formatDistanceToNowStrict(properties.dueDate);

            return {relativeDate, distanceFromNow}
        }

        return false;
    };

    const setProperty = (property, value) => {
        if (!Object.prototype.hasOwnProperty.call(properties, property)) {
            console.error(`${property} is not a property of ToDoItem`);
            return;
        }

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
