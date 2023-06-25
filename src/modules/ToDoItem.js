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
        setProperty,
    };
};

export default ToDoItem;
