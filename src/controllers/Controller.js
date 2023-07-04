import ProjectManager from "../models/ProjectManager";
import ModelController from "./ModelController";
import ViewController from "./ViewController";

const Controller = () => {
    ModelController(ProjectManager);
    ViewController(ProjectManager);
};

export default Controller;
