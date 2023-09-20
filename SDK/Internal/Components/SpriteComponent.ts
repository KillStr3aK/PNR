import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class SpriteComponent implements IComponent {
    public Sprite: Phaser.GameObjects.Sprite;

    constructor(parent: Entity, data: ComponentData) {
        this.Sprite = parent.scene.add.sprite(data.X, data.Y, data.Texture, data.Frame);
        this.Sprite.y -= this.Sprite.height * this.Sprite.originY;

        if (data.Scale) {
            this.Sprite.setScale(data.Scale);
        }

        if (data.Depth) {
            this.Sprite.setDepth(data.Depth);
        }
    }

    Destroy(): void {
        this.Sprite.destroy();
    }
}