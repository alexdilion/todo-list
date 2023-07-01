const ProjectManager = (() => {
    const projects = [];
    let currentIndex = 0;

    const getProject = (index) => projects[index];
    const getProjects = () => projects;

    const deleteProject = (index) => {
        if (projects.length < 1) return;

        projects.splice(index, index + 1);
    };

    const addProject = (project) => {
        project.setIndex(projects.length)
        projects.push(project);
    };

    const setCurrentIndex = (newIndex) => {
        currentIndex = newIndex;
    }

    const isInvalidName = (name) => !!projects.find((project) => project.getName() === name);
    const getCurrentProject = () => projects[currentIndex];

    return {
        getProject,
        getProjects,
        getCurrentProject,
        setCurrentIndex,
        deleteProject,
        addProject,
        isInvalidName,
    };
})();

export default ProjectManager;
