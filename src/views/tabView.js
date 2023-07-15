import elements from "./elements";

const { projectsContainer, tabTemplate, overviewsContainer } = elements;

export function createTab(project, currentProject) {
    if (project.isOverview()) {
        const tab = tabTemplate.cloneNode();
        tab.removeAttribute("id");
        tab.textContent = project.getName();
        tab.classList.remove("user-project");
        tab.classList.add("project-overview");

        if (currentProject.getName() === project.getName()) {
            tab.classList.add("selected");
        } else {
            tab.classList.remove("selected");
        }

        overviewsContainer.appendChild(tab);
        return;
    }

    const tab = tabTemplate.cloneNode(true);
    tab.removeAttribute("id");
    tab.innerHTML = project.getName() + tab.innerHTML;

    if (currentProject.getName() === project.getName()) {
        tab.classList.add("selected");
    } else {
        tab.classList.remove("selected");
    }

    projectsContainer.appendChild(tab);
}

export function loadTabs(projects, currentProject) {
    projectsContainer.innerHTML = "";
    overviewsContainer.innerHTML = "";

    projects.forEach((project) => createTab(project, currentProject));
}

export function updateSelected(currentProjectIndex) {
    const tabs = document.querySelectorAll(".main-wrapper .project-selector");

    tabs.forEach((tab, index) => {
        if (index === currentProjectIndex) {
            tab.classList.add("selected");
        } else {
            tab.classList.remove("selected");
        }
    });
}
