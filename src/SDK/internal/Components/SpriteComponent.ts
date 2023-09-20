import { IComponent } from "../../models";

export class SpriteComponent implements IComponent
{
    public Sprite?: Phaser.GameObjects.Sprite;

    constructor()
    {
    }

    Destroy(): void {
        this.Sprite?.destroy();
        delete this.Sprite;
    }
}