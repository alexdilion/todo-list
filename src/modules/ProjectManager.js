const ProjectManager = (() => {
    const projects = [];

    const getProject = (index) => projects[index];
    const getProjects = () => projects;

    const deleteProject = (index) => {
        if (projects.length < 1) return;

        projects.splice(index, index + 1);
    };

    const addProject = (project) => {
        projects.push(project);
    };

    return {
        getProject,
        getProjects,
        deleteProject,
        addProject,
    };
})();

export default ProjectManager;
