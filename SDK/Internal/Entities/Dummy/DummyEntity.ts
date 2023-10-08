import { Entity } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { BaseScene, PhysicsBodyComponent, StateSet, DummyIdle, DummyIdleBlink } from "@SDK/Internal";

export const DummyStateSet: StateSet = {
    ID: "dummy",
    States: [DummyIdle, DummyIdleBlink]
};

export class DummyEntity extends Entity {
    constructor(scene: BaseScene) {
        super(scene, EntityType.DUMMY);
        console.log(`DummyEntity\nUUID: ${this.GetID()}\nInstance ID: ${this.GetInstance()}\nType: ${this.GetType()}`);
    }

    public override Start(): void {
        let physicsBodyComponent: PhysicsBodyComponent = this.GetComponent<typeof PhysicsBodyComponent>(PhysicsBodyComponent);
        //physicsBodyComponent.Body.setVelocity(200, 300);
        //physicsBodyComponent.Body.setBounce(1, 1);

        //this.GetComponent<typeof SpriteComponent>(SpriteComponent).Sprite.tint = Math.random() * 1600000000;
    }
}