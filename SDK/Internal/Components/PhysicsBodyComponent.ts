import { Entity, ComponentData, IComponent } from "@SDK/Models";
import { SpriteComponent } from "./SpriteComponent";

export class PhysicsBodyComponent implements IComponent {
    public Body: Phaser.Physics.Arcade.Body;

    constructor(parent: Entity, data?: ComponentData) {
        const sprite: Phaser.GameObjects.Sprite = parent.GetComponent(SpriteComponent).Sprite;
        parent.scene.add.existing(sprite) as Phaser.Physics.Arcade.Sprite;
        this.Body = sprite.body as Phaser.Physics.Arcade.Body;

        this.Body.setSize(sprite.width, sprite.height);
        this.Body.updateBounds();

        if (data?.MaxVelocityX) {
            this.Body.maxVelocity.x = data.MaxVelocityX;
        }

        if (data?.CollideWithWorldBounds) {
            this.Body.collideWorldBounds = true;
        }
    }

    Destroy(): void {
        this.Body?.destroy();
    }
}