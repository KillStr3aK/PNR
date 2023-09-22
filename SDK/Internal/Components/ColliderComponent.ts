import { Entity, ComponentData, IComponent } from "@SDK/Models";

export type ColliderData = {
    Objects: ((() => Phaser.GameObjects.GameObject[]) | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.GameObject | Phaser.GameObjects.Group | Phaser.GameObjects.Group[]);
    OnCollide?: ArcadePhysicsCallback;
    OnProcess?: ArcadePhysicsCallback;
};

export class ColliderComponent implements IComponent {
    public Parent: Entity;

    constructor(parent: Entity, data: ComponentData) {
        this.Parent = parent;

        if (data.Objects) {
            if (typeof data.Objects === "function") {
                parent.scene.physics.add.collider(parent, data.Objects(), data.OnCollide ?? undefined, data.OnProcess ?? undefined, this);
            } else {
                throw new Error(`COLLIDER2D::INVALID::OBJECTS_${data.Objects}`);
            }
        }
    }
}