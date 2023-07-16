const priorityValues = {
    high: 3,
    medium: 2,
    low: 1,
    none: 0,
};

function ascendingDate(taskA, taskB) {
    return taskA.getProperty("dueDate") > taskB.getProperty("dueDate");
}

function descendingDate(taskA, taskB) {
    return taskA.getProperty("dueDate") < taskB.getProperty("dueDate");
}

function ascendingPriority(taskA, taskB) {
    return priorityValues[taskA.getProperty("priority")] > priorityValues[taskB.getProperty("priority")];
}

function descendingPriority(taskA, taskB) {
    return priorityValues[taskA.getProperty("priority")] < priorityValues[taskB.getProperty("priority")];
}

function finishedFirst(taskA, taskB) {
    return taskB.getProperty("done");
}

function unfinishedFirst(taskA, taskB) {
    return taskA.getProperty("done");
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
