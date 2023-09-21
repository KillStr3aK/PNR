import { Entity } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { BaseScene, PhysicsBodyComponent } from "@SDK/Internal";

export class DummyEntity extends Entity {
    constructor(scene: BaseScene) {
        super(scene, EntityType.DUMMY);
    }

    public override Start(): void {
        let physicsBodyComponent: PhysicsBodyComponent = this.GetComponent(PhysicsBodyComponent);
        physicsBodyComponent.Body.setVelocity(200, 300);
        physicsBodyComponent.Body.setBounce(1, 1);
    }
}