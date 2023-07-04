import ProjectManager from "../models/ProjectManager";
import ModelController from "./ModelController";
import ViewController from "./ViewController";

export default function Controller() {
    ModelController(ProjectManager);
    ViewController(ProjectManager);
};
