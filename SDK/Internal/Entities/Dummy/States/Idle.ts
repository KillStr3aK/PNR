import { DummyEntity, AnimationComponent } from "@SDK/Internal";
import { State, StateData, Entity, TransitionType } from "@SDK/Models";

export const DummyIdle: State<DummyEntity> = {
    ID: "dummy-idle",
    OnEnter(entity: Entity, data: StateData) {
        entity.GetComponent(AnimationComponent).Play("dummy-idle", true);
    },

    Transitions: [
        {
            Type: TransitionType.TIMER,
            Delay: 3000,
            To: "dummy-idle-blink"
        }
    ]
}