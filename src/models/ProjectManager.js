const ProjectManager = (initialProjects = []) => {
    const projects = initialProjects;
    let currentProject = projects[0];

    projects.forEach((project, index) => {
        project.setProjectIndex(index);
    });

    const getProject = (projectIndex) => {
        const project = projects[projectIndex];

        if (project.isOverview()) {
            project.updateOverview(projects);
        }

        return project;
    };

    const getProjects = () => projects;

    const addProject = (project) => {
        project.setProjectIndex(projects.length);
        projects.push(project);
    };

    const deleteProject = (projectIndex) => {
        projects.splice(projectIndex, 1);

        projects.forEach((project, index) => {
            project.setProjectIndex(index);
        });

        const numOverviews = projects.filter((project) => project.isOverview()).length;
        const numProjects = projects.length - numOverviews;
        let newIndex;

        if (currentProject.getProjectIndex() === projectIndex) {
            if (projectIndex > numOverviews) {
                newIndex = projectIndex - 1;
            } else if (projectIndex === numOverviews && numProjects > 0) {
                newIndex = projectIndex;
            } else {
                newIndex = 0;
            }
        } else {
            newIndex = currentProject.getProjectIndex();
        }

        currentProject = projects[newIndex];
    };

    const getCurrentProject = () => getProject(currentProject.getProjectIndex());
    const setCurrentProject = (index) => {
        currentProject = projects[index];
    };

    return {
        getProject,
        getProjects,
        addProject,
        deleteProject,
        getCurrentProject,
        setCurrentProject,
    };
};

export default ProjectManager;
