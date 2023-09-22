import { Entity, ComponentData, IComponent, StateMachine, TransitionType } from "@SDK/Models";
import { StateSetRegistrar } from "@SDK/Internal";

export class StateMachineComponent implements IComponent {
    public StateMachine: StateMachine<Entity>;

    constructor(parent: Entity, data: ComponentData) {
        const states = StateSetRegistrar.GetSet(data.StateSet);
        const initialState = StateSetRegistrar.GetState(data.InitialStateId);

        this.StateMachine = new StateMachine<Entity>(parent.GetScene(), parent, states, initialState);

        if (data.Disabled) {
            this.StateMachine.Disable();
        } else {
            this.StateMachine.DoTransition({
                Type: TransitionType.INITIAL,
                To: initialState.ID
            });
        }
    }

    Destroy(): void {
        this.StateMachine.Destroy();
    }
}