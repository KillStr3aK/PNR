import { ComponentData, IComponent, IComponentable } from "../../models";

export class PhysicsBodyComponent implements IComponent {
    public Body?: Phaser.Physics.Arcade.Body;

    constructor(parent: IComponentable, data?: ComponentData) {
    }

    Destroy(): void {
        this.Body?.destroy();
        delete this.Body;
    }
}