import LoadProject from "./LoadProject";

const PROJECTS_CONTAINER = document.querySelector("#user-projects");

export default function UpdateProjectTabs(projects) {
    let currentProject = document.querySelector("#project-items").getAttribute("data-current-project");
    PROJECTS_CONTAINER.innerHTML = "";

    projects.forEach((project) => {
        const projectElement = document.createElement("li");
        projectElement.classList.add("default-project", "project-selector");
        projectElement.textContent = project.getName();

        if (currentProject === project.getName()) {
            projectElement.classList.add("selected");
        }

        projectElement.addEventListener("click", () => {
            if (projectElement.textContent === currentProject) return;

            LoadProject(project);
            currentProject = project.getName();

            const tabs = PROJECTS_CONTAINER.querySelectorAll("li");

            tabs.forEach(tab => {
                if (tab.textContent === currentProject) {
                    tab.classList.add("selected");
                } else {
                    tab.classList.remove("selected");
                }
            })
        });

        PROJECTS_CONTAINER.appendChild(projectElement);
    });
}
