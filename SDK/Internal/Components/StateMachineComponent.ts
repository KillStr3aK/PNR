import { Entity, ComponentData, IComponent, StateMachine, State, TransitionType } from "@SDK/Models";
import { StateSets } from "@SDK/Internal";

export class StateMachineComponent implements IComponent {
    public StateMachine: StateMachine<Entity>;

    constructor(parent: Entity, data: ComponentData) {
        const states = StateSets.GetSet(data.StateSet);
        const initialState = StateSets.GetValue<State<Entity>>(data.InitialStateId);

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