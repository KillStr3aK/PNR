import { BaseScene } from "@SDK/Internal";
import { IStateMachine, State, Transition, ConditionalTransitionTrigger, ConditionalTransition, TimerTransition, TimerTransitionTrigger, TransitionCanceler, TransitionType, IObjectState, IUpdatable, IDisposable } from "@SDK/Models";

export class StateMachine<T> implements IStateMachine<T>, IObjectState, IUpdatable, IDisposable {
    public Enabled: boolean;
    public Scene: BaseScene;
    public Entity: T;
    public CurrentState: State<T>;

    private InitialState: State<T>;
    private States: State<T>[];

    private Cancelers: TransitionCanceler[];

    constructor(scene: BaseScene, entity: T, states: State<T>[], initialState: State<T>) {
        this.Scene = scene;
        this.Entity = entity;
        this.Enabled = true;

        this.States = states;
        this.InitialState = initialState;
        this.CurrentState = { ID: "none", Transitions: [] };
        this.Cancelers = [];
    }

    public DoTransition(transition: Transition<T>): void {
        this.CancelTransitionTriggers();

        if (this.CurrentState.OnLeave) {
            this.CurrentState.OnLeave(this.Entity, this.CurrentState.Data || {});
        }

        const nextStateId: string = typeof transition.To === "string" ? transition.To : transition.To(this.Entity);
        this.CurrentState = this.States.find(state => state.ID === nextStateId) as State<T>;

        if (transition.OnTransition && transition.Type !== TransitionType.INITIAL) {
            transition.OnTransition(this.Entity);
        }

        if (this.CurrentState.OnEnter) {
            this.CurrentState.OnEnter(this.Entity, this.CurrentState.Data || {});
        }

        this.RegisterTransitionTriggers();
    }

    public Enable(): void {
        this.Enabled = true;
        this.RegisterTransitionTriggers();
    }

    public Disable(): void {
        this.Enabled = false;
        this.DoTransition({ To: this.InitialState.ID } as Transition<T>);
    }

    public IsEnabled(): boolean {
        return this.Enabled;
    }

    public Update(...args: any[]): void {
        if (this.CurrentState.OnUpdate) {
            this.CurrentState.OnUpdate(this.Entity, this.CurrentState.Data || {});
        }
    }

    public Destroy(): void {
        this.CancelTransitionTriggers();
    }

    private CancelTransitionTriggers(): void {
        this.Cancelers.forEach(c => c());
        this.Cancelers = [];
    }

    private RegisterTransitionTriggers(): void {
        this.CurrentState.Transitions.forEach(transition => {
            switch (transition.Type) {
                case TransitionType.CONDITIONAL:
                {
                    this.Cancelers.push(ConditionalTransitionTrigger(this, transition as ConditionalTransition<T>));
                } break;

                case TransitionType.TIMER:
                {
                    this.Cancelers.push(TimerTransitionTrigger(this, transition as TimerTransition<T>));
                } break;

                default:
                {
                    if (transition.TransitionTrigger)
                    {
                        this.Cancelers.push(transition.TransitionTrigger(this, transition));
                    } else {
                        throw new Error(`Transition type ${typeof transition} (${transition.Type}) has no transition trigger implemented.`);
                    }
                }
            }
        });
    }
}