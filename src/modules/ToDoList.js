const ToDoList = (listName) => {
    let items = [];
    let name = listName;

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

    return {
        getItem,
        getItems,
        addItem,
        deleteItem,
        clearItems,
        getName,
        setName,
    };
};

export default ToDoList;
