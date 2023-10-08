import { AnimationComponent } from "@SDK/Internal";
import { State, StateData, Entity, TransitionType } from "@SDK/Models";

export const Template: State<Entity> = {
    ID: "template",
    OnEnter(entity: Entity, data: StateData) {
        entity.GetComponent(AnimationComponent).Play("template", true);
    },

    Transitions: []
}