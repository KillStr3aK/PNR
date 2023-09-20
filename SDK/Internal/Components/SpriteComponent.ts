import { ComponentData, IComponent, IComponentable } from "../../Models";

export class SpriteComponent implements IComponent {
    public Sprite?: Phaser.GameObjects.Sprite;

    constructor(parent: IComponentable, data?: ComponentData) {
    }

    Destroy(): void {
        this.Sprite?.destroy();
        delete this.Sprite;
    }
}