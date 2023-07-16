import { isToday, isThisWeek, add } from "date-fns";

import Task from "./models/Task";
import Project from "./models/Project";

function addToNow(time) {
    return add(new Date(Date.now()), time);
}

export default function templateProjects() {
    const Project1 = Project("Chores");

    const p1Task1 = Task(Project1, {
        title: "Buy groceries",
        priority: "low",
        dueDate: addToNow({ days: 2 }),
        description: "Need to buy milk and eggs",
    });

    const p1Task2 = Task(Project1, {
        title: "Take out the trash",
        priority: "high",
        dueDate: addToNow({ days: -1 }),
        done: true,
    });

    const p1Task3 = Task(Project1, {
        title: "Do laundry",
        priority: "high",
        dueDate: addToNow({ hours: 5 }),
    });

    const p1Task4 = Task(Project1, {
        title: "Wash dishes",
        priority: "medium",
        dueDate: addToNow({ hours: -3 }),
        done: true,
    });

    const p1Task5 = Task(Project1, {
        title: "Clean room",
        priority: "medium",
        dueDate: addToNow({ days: 3 }),
    });

    const p1Task6 = Task(Project1, {
        title: "Pay rent",
        priority: "medium",
        dueDate: addToNow({ weeks: 2 }),
    });

    const p1Task7 = Task(Project1, {
        title: "Pay utilities",
        priority: "high",
        dueDate: addToNow({ days: 4 }),
        description: "Need to pay water and gas",
    });

    Project1.addTasks([p1Task1, p1Task2, p1Task3, p1Task7, p1Task4, p1Task5, p1Task6]);

    const Project2 = Project("Homework");

    const p2Task1 = Task(Project2, {
        title: "Finish English essay",
        priority: "low",
        description: "Choose a topic and write a 1000-word essay",
        dueDate: addToNow({ weeks: 1 }),
    });

    const p2Task2 = Task(Project2, {
        title: "Study for math exam",
        priority: "high",
        dueDate: addToNow({ days: 9 }),
    });

    const p2Task3 = Task(Project2, {
        title: "Do physics homework",
        priority: "medium",
        dueDate: addToNow({ days: -1 }),
        done: true,
    });

    const p2Task4 = Task(Project2, {
        title: "Complete History reading",
        priority: "low",
        dueDate: addToNow({ hours: 5 }),
        description: "Read chapters 5 and 6 in the textbook",
    });

    const p2Task5 = Task(Project2, {
        title: "Practice German vocabulary",
        priority: "medium",
        dueDate: addToNow({ days: 2 }),
        description: "Review and memorize vocabulary words from Unit 3",
    });

    Project2.addTasks([p2Task1, p2Task2, p2Task3, p2Task4, p2Task5]);

    const Project3 = Project("Other");

    const p3Task1 = Task(Project3, {
        title: "Finish TOP",
        priority: "high",
    });

    const p3Task2 = Task(Project3, {
        title: "Learn to draw",
    });

    const p3Task3 = Task(Project3, {
        title: "Start going to the gym",
        priority: "medium",
    });

    const p3Task4 = Task(Project3, {
        title: "Cook some nice meals",
        priority: "low",
        description: "Select a recipe and gather ingredients to try a new dish",
        done: true,
    });

    const p3Task5 = Task(Project3, {
        title: "Practice playing the guitar",
        priority: "low",
        dueDate: addToNow({ days: 2 }),
        description: "Spend 30 minutes practicing chords and a new song",
    });

    const p3Task6 = Task(Project3, {
        title: "Go for a hike",
        priority: "medium",
        dueDate: addToNow({ days: 5 }),
        description: "Look up some trails and plan a hiking trip with friends",
    });

    Project3.addTasks([p3Task1, p3Task5, p3Task2, p3Task3, p3Task4, p3Task6]);

    const overviews = [
        Project("Today", true, (task) => isToday(task.getProperty("dueDate"))),
        Project("This Week", true, (task) => isThisWeek(task.getProperty("dueDate"))),
        Project("All Tasks", true, () => true),
    ];

    return [...overviews, Project1, Project2, Project3];
}
