import add from "date-fns/add";
import Project from "./models/Project";
import Task from "./models/Task";

function addToNow(time) {
    return add(new Date(Date.now()), time);
}

export default function TemplateProjects() {
    const Project1 = Project("Chores");

    const p1Task1 = Task("Buy groceries", {
        priority: "low",
        dueDate: addToNow({ days: 2 }),
        description: "Need to buy milk and eggs",
    });

    const p1Task2 = Task("Take out the trash", {
        priority: "high",
        dueDate: addToNow({ days: -2 }),
        done: true,
    });

    const p1Task3 = Task("Do laundry", {
        priority: "high",
        dueDate: addToNow({ hours: 3 }),
    });

    const p1Task4 = Task("Wash dishes", {
        priority: "medium",
        dueDate: addToNow({ hours: -2 }),
        done: true,
    });

    const p1Task5 = Task("Vacuum and dust room", {
        priority: "medium",
        dueDate: addToNow({ days: 3 }),
    });

    Project1.addTasks([p1Task1, p1Task2, p1Task3, p1Task4, p1Task5]);

    const Project2 = Project("Homework");

    const p2Task1 = Task("Finish English essay", {
        priority: "low",
        dueDate: addToNow({ weeks: 1 }),
    });

    const p2Task2 = Task("Study for math exam", {
        priority: "high",
        dueDate: addToNow({ days: 2 }),
    });

    const p2Task3 = Task("Do physics homework", {
        priority: "medium",
        dueDate: addToNow({ days: -1 }),
        done: true,
    });

    Project2.addTasks([p2Task1, p2Task2, p2Task3]);

    const Project3 = Project("Other");

    const p3Task1 = Task("Finish TOP", {
        priority: "high",
    });

    const p3Task2 = Task("Learn to draw");

    const p3Task3 = Task("Start going to the gym", {
        priority: "medium",
    });

    const p3Task4 = Task("Cook some nice meals", {
        priority: "low",
        done: true,
    });

    Project3.addTasks([p3Task1, p3Task2, p3Task3, p3Task4]);

    return [Project1, Project2, Project3]
}
