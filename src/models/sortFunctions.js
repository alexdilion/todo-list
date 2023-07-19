const priorityValues = {
    high: 3,
    medium: 2,
    low: 1,
    none: 0,
};

function ascendingDate(taskA, taskB) {
    if (taskA.getProperty("dueDate") === taskB.getProperty("dueDate")) return 0;

    const result = taskA.getProperty("dueDate") > taskB.getProperty("dueDate");

    return result ? 1 : -1;
}

function descendingDate(taskA, taskB) {
    if (taskA.getProperty("dueDate") === taskB.getProperty("dueDate")) return 0;

    const result = taskA.getProperty("dueDate") < taskB.getProperty("dueDate");

    return result ? 1 : -1;
}

function ascendingPriority(taskA, taskB) {
    if (priorityValues[taskA.getProperty("priority")] === priorityValues[taskB.getProperty("priority")]) return 0;

    const result = priorityValues[taskA.getProperty("priority")] > priorityValues[taskB.getProperty("priority")];

    return result ? 1 : -1;
}

function descendingPriority(taskA, taskB) {
    if (priorityValues[taskA.getProperty("priority")] === priorityValues[taskB.getProperty("priority")]) return 0;

    const result = priorityValues[taskA.getProperty("priority")] < priorityValues[taskB.getProperty("priority")];

    return result ? 1 : -1;
}

function finishedFirst(taskA) {
    return !taskA.getProperty("done") ? 1 : -1;
}

function unfinishedFirst(taskA) {
    return taskA.getProperty("done") ? 1 : -1;
}

const sortFunctions = {
    "Ascending dates": (tasks) => tasks.sort((a, b) => ascendingDate(a, b)),
    "Descending dates": (tasks) => tasks.sort((a, b) => descendingDate(a, b)),
    "Ascending priority": (tasks) => tasks.sort((a, b) => ascendingPriority(a, b)),
    "Descending priority": (tasks) => tasks.sort((a, b) => descendingPriority(a, b)),
    "Finished first": (tasks) => tasks.sort((a, b) => finishedFirst(a, b)),
    "Unfinished first": (tasks) => tasks.sort((a, b) => unfinishedFirst(a, b)),
};

export default sortFunctions;
