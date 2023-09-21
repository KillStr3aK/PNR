import { BaseTransition, TransitionCanceler, StateMachine } from "@SDK/Models";

export type TimerTransition<T> = BaseTransition<T> & {
    Delay: number | (() => number);
}

export function TimerTransitionTrigger<T>(stateMachine: StateMachine<T>, transition: TimerTransition<T>): TransitionCanceler {
    const listener = () => {
        stateMachine.DoTransition(transition);
    }

    const delay = (typeof transition.Delay === "number") ? transition.Delay : transition.Delay();
    const timer = stateMachine.Scene.time.delayedCall(delay, listener);
    return (() => timer.remove());
}