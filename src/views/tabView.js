import elements from "./elements";

const { projectsContainer, tabTemplate, overviewsContainer, sidebarContainer } = elements;

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

export function createTab(project) {
    if (project.isOverview()) {
        const tab = tabTemplate.cloneNode();
        tab.removeAttribute("id");
        tab.textContent = project.getName();
        tab.classList.remove("user-project");
        tab.classList.add("project-overview");

        overviewsContainer.appendChild(tab);
        return;
    }

    const tab = tabTemplate.cloneNode(true);
    tab.removeAttribute("id");
    tab.innerHTML = project.getName() + tab.innerHTML;

    projectsContainer.appendChild(tab);
}

export function loadTabs(projects) {
    projectsContainer.innerHTML = "";
    overviewsContainer.innerHTML = "";

    projects.forEach((project) => createTab(project));
    updateSelected(+sidebarContainer.getAttribute("data-current-project"));
}
