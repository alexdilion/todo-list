const ProjectManager = (initialProjects = []) => {
    const projects = initialProjects;
    let currentProject = projects[3];

    projects.forEach((project, index) => {
        project.setProjectIndex(index);
    });

    const getProject = (projectIndex) => {
        const project = projects[projectIndex];
        if (project.isOverview()) {
            project.clearTasks();

            const filteredTasks = projects
                .filter((p) => !p.isOverview())
                .map((p) => p.getTasks())
                .flat()
                .filter(project.getFilter());

            project.addTasks(filteredTasks);
        }

        return project;
    };

    const getProjects = () => projects;

    const addProject = (project) => {
        projects.push(project);
    };

    const deleteProject = (projectIndex) => {
        if (currentProject.getProjectIndex() === projectIndex) {
            currentProject = projects[projectIndex - 1];
        }

        projects.splice(projectIndex, 1);

        projects.forEach((project, index) => {
            project.setProjectIndex(index);
        });

        if (projects.length === projects.filter((project) => project.isOverview()).length) {
            [currentProject] = projects;
        }
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
