import { Entity, State, StateData, TransitionType } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { BaseScene, PhysicsBodyComponent, SpriteComponent, StateSet } from "@SDK/Internal";

export const DummyStateSet: StateSet = {
    ID: "dummy",
    States: [
        {
            ID: "dummy-idle",
            OnEnter(entity: Entity, data: StateData) {
                entity.GetComponent(SpriteComponent).Sprite.anims.play("dummy-idle", true);
            },

            Transitions: [
                {
                    Type: TransitionType.TIMER,
                    Delay: 3000,
                    To: "dummy-idle-blink"
                }
            ]
        },

        {
            ID: "dummy-idle-blink",
            OnEnter(entity: Entity, data: StateData) {
                entity.GetComponent(SpriteComponent).Sprite.anims.play("dummy-idle-blink", true);
            },

            Transitions: [
                {
                    Type: TransitionType.TIMER,
                    Delay: 1000,
                    To: "dummy-idle"
                }
            ]
        }
    ]
};

export class DummyEntity extends Entity {
    constructor(scene: BaseScene) {
        super(scene, EntityType.DUMMY);
    }

    public override Start(): void {
        let physicsBodyComponent: PhysicsBodyComponent = this.GetComponent<typeof PhysicsBodyComponent>(PhysicsBodyComponent);
        physicsBodyComponent.Body.setVelocity(200, 300);
        physicsBodyComponent.Body.setBounce(1, 1);
    }
}