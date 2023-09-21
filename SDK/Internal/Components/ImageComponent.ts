import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class ImageComponent implements IComponent {
    public Image: Phaser.GameObjects.Image;

    constructor(parent: Entity, data: ComponentData) {
        this.Image = parent.scene.add.image(data.X, data.Y, data.Texture);

        if (data.Scale) {
            this.Image.setScale(data.Scale);
        }

        if (data.Depth) {
            this.Image.setDepth(data.Depth);
        }
    }

    Destroy(): void {
        this.Image.destroy();
    }
}