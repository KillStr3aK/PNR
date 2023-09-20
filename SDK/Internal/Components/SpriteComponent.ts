import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class SpriteComponent implements IComponent {
    public Sprite?: Phaser.GameObjects.Sprite;

    constructor(parent: Entity, data?: ComponentData) {
    }

    Destroy(): void {
        this.Sprite?.destroy();
        delete this.Sprite;
    }
}