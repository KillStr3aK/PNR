import { DummyEntity, AnimationComponent } from "@SDK/Internal";
import { State, StateData, Entity, TransitionType } from "@SDK/Models";

export const DummyIdleBlink: State<DummyEntity> = {
    ID: "dummy-idle-blink",
    OnEnter(entity: Entity, data: StateData) {
        entity.GetComponent(AnimationComponent).Play("dummy-idle-blink", true);
    },

    Transitions: [
        {
            Type: TransitionType.TIMER,
            Delay: 1000,
            To: "dummy-idle"
        }
    ]
}