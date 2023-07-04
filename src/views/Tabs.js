import EventManager from "../EventManager";

const Tabs = (() => {
    const tabsContainer = document.querySelector("#user-projects");

    const tabClickedEvent = EventManager();

    const LoadTabs = (projects, currentProject) => {
        tabsContainer.innerHTML = "";

        projects.forEach((project, index) => {
            const tab = document.createElement("li");
            tab.classList.add("user-project", "project-selector");
            tab.textContent = project.getName();

            if (currentProject.getName() === project.getName()) {
                tab.classList.add("selected");
            } else {
                tab.classList.remove("selected");
            }

            tab.addEventListener("click", () => tabClickedEvent.trigger({ index }));

            tabsContainer.appendChild(tab);
        });
    };

    const updateSelected = (currentProjectIndex) => {
        const tabs = tabsContainer.querySelectorAll(".user-project");

        tabs.forEach((tab, index) => {
            if (index === currentProjectIndex) {
                tab.classList.add("selected");
            } else {
                tab.classList.remove("selected");
            }
        })
    }

    // Remove project method that will get ProjectManager to remove a given project

    const getEvents = () => ({ tabClickedEvent });

    return {
        LoadTabs,
        getEvents,
        updateSelected,
    };
})();

export default Tabs;
