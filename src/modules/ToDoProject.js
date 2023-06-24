const ToDoProject = () => {
    const lists = [];

    const getList = (index) => lists[index];
    const getLists = () => lists;

    const deleteList = (index) => {
        if (lists.length < 1) return;

        lists.splice(index, index + 1);
    }

    const addList = (list) => {
        lists.push(list);
    }

    return {
        getList,
        getLists,
        deleteList,
        addList
    }
}

export default ToDoProject;