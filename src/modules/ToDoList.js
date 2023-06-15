const ToDoList = (listName) => {
    let items = [];
    let name = listName;

    const getItem = (index) => items[index];

    const addItem = (item) => {
        items.push(item);
    }

    const deleteItem = (index) => {
        items.splice(index, index + 1)
    }

    const clearItems = () => {
        items = {};
    }

    const getName = () => name;
    const setName = (value) => {
        name = value;
    }

    return {
        getItem,
        addItem, 
        deleteItem,
        clearItems, 
        getName,
        setName
    }
}