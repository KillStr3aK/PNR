import { Entity, ComponentData, IComponent } from "@SDK/Models";
import { SpriteComponent } from "./SpriteComponent";

export class PhysicsBodyComponent implements IComponent {
    public Body: Phaser.Physics.Arcade.Body;

    constructor(parent: Entity, data?: ComponentData) {
        const sprite: Phaser.GameObjects.Sprite = parent.GetComponent(SpriteComponent).Sprite;
        parent.scene.add.existing(sprite) as Phaser.Physics.Arcade.Sprite;
        this.Body = sprite.body as Phaser.Physics.Arcade.Body;
    }

    Destroy(): void {
        this.Body?.destroy();
    }
}