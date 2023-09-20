import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class PhysicsBodyComponent implements IComponent {
    public Body?: Phaser.Physics.Arcade.Body;

    constructor(parent: Entity, data?: ComponentData) {
    }

    Destroy(): void {
        this.Body?.destroy();
        delete this.Body;
    }
}