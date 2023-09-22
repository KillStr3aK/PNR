import { BaseScene } from "@SDK/Internal";
import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class SceneComponent implements IComponent {
    public Scene: BaseScene;

    constructor(parent: Entity, data?: ComponentData) {
        this.Scene = parent.scene as BaseScene;
    }
}