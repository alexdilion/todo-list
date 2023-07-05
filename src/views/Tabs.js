import EventManager from "../EventManager";

const Tabs = (() => {
    const tabsContainer = document.querySelector("#user-projects");
    const tabTemplate = document.querySelector("#tab-template")

    const tabClickedEvent = EventManager();

    const LoadTabs = (projects, currentProject) => {
        tabsContainer.innerHTML = "";

        projects.forEach((project, index) => {
            const tab = tabTemplate.cloneNode(true)
            tab.removeAttribute("id");
            tab.innerHTML = project.getName() + tab.innerHTML;

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

    const getEvents = () => ({ tabClickedEvent });

    return {
        LoadTabs,
        getEvents,
        updateSelected,
    };
})();

export default Tabs;
