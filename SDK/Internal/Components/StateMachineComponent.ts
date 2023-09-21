import { Entity, ComponentData, IComponent, StateMachine, State } from "@SDK/Models";

export class StateMachineComponent implements IComponent {
    public StateMachine: StateMachine<Entity>;

    constructor(parent: Entity, data?: ComponentData) {
        // TODO PARAMS
        this.StateMachine = new StateMachine<Entity>(parent.GetScene(), parent, [], {} as State<Entity>);
    }

    Destroy(): void {
        this.StateMachine.Destroy();
    }
}