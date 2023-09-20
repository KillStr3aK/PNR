import { IComponent } from "../../models";

export class PhysicsBodyComponent implements IComponent
{
    public Body?: Phaser.Physics.Arcade.Body;

    constructor()
    {
    }

    Destroy(): void {
        this.Body?.destroy();
        delete this.Body;
    }
}