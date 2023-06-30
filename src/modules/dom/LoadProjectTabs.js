const PROJECTS_CONTAINER = document.querySelector("#user-projects");

export default function LoadProjectTabs(projects) {
    const currentProject = document.querySelector("#project-items").getAttribute("data-current-project");
    PROJECTS_CONTAINER.innerHTML = "";

    projects.forEach((project) => {
        const projectElement = document.createElement("li");
        projectElement.classList.add("default-project", "project-selector");
        projectElement.textContent = project.getName();

        if (currentProject === project.getName()) {
            projectElement.classList.add("selected");
        }

        PROJECTS_CONTAINER.appendChild(projectElement);
    });
}
