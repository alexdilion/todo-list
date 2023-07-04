import EventManager from "../EventManager";

const ProjectManager = (() => {
    const projects = [];
    let currentIndex = 0;

    const projectAddedEvent = EventManager();
    const projectSwitchedEvent = EventManager();

    const getProject = (index) => projects[index];
    const getProjects = () => projects;

    const deleteProject = (index) => {
        if (projects.length < 1) return;

        projects.splice(index, index + 1);
    };

    const addProject = (project) => {
        project.setProjectIndex(projects.length);
        projects.push(project);
        projectAddedEvent.trigger({ project });
    };

    const addProjects = (projectsArray) => {
        projectsArray.forEach((project) => addProject(project));
    };

    const setCurrentIndex = (newIndex) => {
        if (newIndex === currentIndex) return;

        currentIndex = newIndex;
        projectSwitchedEvent.trigger({ project: projects[currentIndex], currentIndex });
    };

    const isInvalidName = (name) => !!projects.find((project) => project.getName() === name);
    const getCurrentProject = () => projects[currentIndex];
    const getCurrentProjectIndex = () => currentIndex;

    const getEvents = () => ({ projectAddedEvent, projectSwitchedEvent });

    return {
        getProject,
        getProjects,
        getCurrentProject,
        setCurrentIndex,
        deleteProject,
        addProject,
        addProjects,
        isInvalidName,
        getEvents,
        getCurrentProjectIndex,
    };
})();

export default ProjectManager;
