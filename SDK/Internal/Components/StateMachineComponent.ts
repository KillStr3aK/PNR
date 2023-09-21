import { Entity, ComponentData, IComponent, StateMachine, State, TransitionType } from "@SDK/Models";

export class StateMachineComponent implements IComponent {
    public StateMachine: StateMachine<Entity>;

    constructor(parent: Entity, data: ComponentData) {
        // TODO PARAMS
        this.StateMachine = new StateMachine<Entity>(parent.GetScene(), parent, [], {} as State<Entity>);

        if (data.Disabled) {
            this.StateMachine.Disable();
        } else {
            this.StateMachine.DoTransition({
                Type: TransitionType.INITIAL,
                To: {} as any
            });
        }
    }

    Destroy(): void {
        this.StateMachine.Destroy();
    }
}