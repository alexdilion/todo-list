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
    
    const isInvalidName = (name) => !!projects.find((project) => project.getName() === name);
    const getCurrentProject = () => document.querySelector("#project-items").getAttribute("data-current-project");

    return {
        getProject,
        getProjects,
        getCurrentProject,
        deleteProject,
        addProject,
        isInvalidName,
    };
})();

export default ProjectManager;
