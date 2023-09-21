import { BaseTransition, TransitionCanceler, StateMachine } from "@SDK/Models";

export type ConditionalTransition<T> = BaseTransition<T> & {
    Condition: (entity: T) => boolean;
}

export function ConditionalTransitionTrigger<T>(stateMachine: StateMachine<T>, transition: ConditionalTransition<T>): TransitionCanceler {
    const listener = () => {
        if (transition.Condition(stateMachine.Entity)) {
            stateMachine.DoTransition(transition);
        }
    }

    stateMachine.Scene.events.on(Phaser.Scenes.Events.POST_UPDATE, listener);
    return (() => stateMachine.Scene.events.off(Phaser.Scenes.Events.POST_UPDATE, listener));
}