import add from "date-fns/add";
import Project from "./models/Project";
import Task from "./models/Task";

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
        dueDate: addToNow({ days: -2 }),
        done: true,
    });

    const p1Task3 = Task(Project1, {
        title: "Do laundry",
        priority: "high",
        dueDate: addToNow({ hours: 3 }),
    });

    const p1Task4 = Task(Project1, {
        title: "Wash dishes",
        priority: "medium",
        dueDate: addToNow({ hours: -2 }),
        done: true,
    });

    const p1Task5 = Task(Project1, {
        title: "Vacuum and dust room",
        priority: "medium",
        dueDate: addToNow({ days: 3 }),
    });

    Project1.addTasks([p1Task1, p1Task2, p1Task3, p1Task4, p1Task5]);

    const Project2 = Project("Homework");

    const p2Task1 = Task(Project2, {
        title: "Finish English essay",
        priority: "low",
        dueDate: addToNow({ weeks: 1 }),
    });

    const p2Task2 = Task(Project2, {
        title: "Study for math exam",
        priority: "high",
        dueDate: addToNow({ days: 2 }),
    });

    const p2Task3 = Task(Project2, {
        title: "Do physics homework",
        priority: "medium",
        dueDate: addToNow({ days: -1 }),
        done: true,
    });

    Project2.addTasks([p2Task1, p2Task2, p2Task3]);

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
        done: true,
    });

    Project3.addTasks([p3Task1, p3Task2, p3Task3, p3Task4]);

    return [Project1, Project2, Project3]
}
