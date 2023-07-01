import LoadProject from "./LoadProject";

const PROJECTS_CONTAINER = document.querySelector("#user-projects");

export default function UpdateProjectTabs(projects) {
    const currentProjectIndex = document.querySelector("#project-items").getAttribute("data-current-project");
    let currentProject = projects[+currentProjectIndex];

    PROJECTS_CONTAINER.innerHTML = "";

    projects.forEach((project) => {
        const projectElement = document.createElement("li");
        projectElement.classList.add("default-project", "project-selector");
        projectElement.textContent = project.getName();

        if (currentProject.getName() === project.getName()) {
            projectElement.classList.add("selected");
        }

        projectElement.addEventListener("click", () => {
            if (projectElement.textContent === currentProject) return;

            LoadProject(project);
            currentProject = projects[project.getIndex()];

            const tabs = PROJECTS_CONTAINER.querySelectorAll("li");

            tabs.forEach((tab) => {
                if (tab.textContent === currentProject.getName()) {
                    tab.classList.add("selected");
                } else {
                    tab.classList.remove("selected");
                }
            });
        });

        PROJECTS_CONTAINER.appendChild(projectElement);
    });
}
