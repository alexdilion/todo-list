import EventManager from "../EventManager";

const ProjectManager = (() => {
    const projects = [];
    let currentIndex = 0;

    const projectAddedEvent = EventManager();
    const projectSwitchedEvent = EventManager();
    const projectDeletedEvent = EventManager();

    const getProject = (index) => projects[index];
    const getProjects = () => projects;

    const isValid = (givenProject) => {
        if (projects.some((project) => project.getName() === givenProject.getName())) return false;

        return true;
    };

    const addProject = (project) => {
        if (!isValid(project)) return false;

        project.setProjectIndex(projects.length);
        projects.push(project);
        projectAddedEvent.trigger({ project });

        return true;
    };

    const addProjects = (projectsArray) => {
        projectsArray.forEach((project) => addProject(project));
    };

    const setCurrentIndex = (newIndex) => {
        if (newIndex === currentIndex) return;

        currentIndex = newIndex;
        projectSwitchedEvent.trigger({ project: projects[currentIndex], currentIndex });
    };

    const deleteProject = (index) => {
        if (projects.length <= 1) return;

        projects.splice(index, 1);

        if (index === currentIndex && currentIndex !== 0) {
            setCurrentIndex(index - 1);
        }

        projectDeletedEvent.trigger({ index });

        if (index === 0) {
            setCurrentIndex(0);
        }

        console.log(projects.length);
    };

    // const getOverview = (filterFunction) => {

    // }

    const isInvalidName = (name) => !!projects.find((project) => project.getName() === name);
    const getCurrentProject = () => projects[currentIndex];
    const getCurrentProjectIndex = () => currentIndex;

    const getEvents = () => ({ projectAddedEvent, projectSwitchedEvent, projectDeletedEvent });

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
