import { BaseScene } from "@SDK/Internal";
import { Entity, ComponentData, IComponent } from "@SDK/Models";

export type ColliderObjectType = Phaser.GameObjects.GameObject[] | Phaser.GameObjects.GameObject | Phaser.GameObjects.Group | Phaser.GameObjects.Group[];

export type ColliderComponentData = {
    Objects: ((scene: BaseScene) => ColliderObjectType);
    OnCollide?: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback;
    OnProcess?: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback;
};

export class ColliderComponent implements IComponent {
    public Parent: Entity;

    constructor(parent: Entity, data: ComponentData) {
        this.Parent = parent;

        if (data.Objects) {
            parent.scene.physics.add.collider(parent, data.Objects(parent.scene as BaseScene), data.OnCollide, data.OnProcess, this);
        } else {
            throw new Error(`COLLIDER2D::INVALID::OBJECTS_${data.Objects}`);
        }
    }
}