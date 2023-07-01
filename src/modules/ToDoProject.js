const ToDoProject = (projectName, isDefault = false) => {
    let items = [];
    let name = projectName;
    let index = 0;
    const defaultProject = isDefault;

    const getItem = (index) => items[index];
    const getItems = () => items;

    const addItem = (item) => {
        items.push(item);
    };

    const deleteItem = (index) => {
        if (items.length < 1) return;

        items.splice(index, index + 1);
    };

    const clearItems = () => {
        items = {};
    };

    const getName = () => name;
    const setName = (value) => {
        name = value;
    };

    const getIndex = () => index;
    const setIndex = (newIndex) => {
        index = newIndex;
    }

    const getHeader = () => {
        if (defaultProject) {
            if (name === "All Tasks") return { name: "", text: "Here are all of the tasks you need to do" };

            return { name: name.toLowerCase(), text: "Here are the tasks you need to do " };
        }

        return { name, text: "Here are the tasks in " };
    };

    return {
        getItem,
        getItems,
        addItem,
        deleteItem,
        clearItems,
        getIndex,
        setIndex,
        getName,
        setName,
        getHeader,
    };
};

export default ToDoProject;
