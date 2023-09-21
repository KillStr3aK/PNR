import { IStateMachine } from "@SDK/Models";

type TransitionType = number;

export type TransitionCanceler = (() => void);

export type BaseTransition<T> = {
    Type?: TransitionType;
    To: string | ((entity: T) => string);
    OnTransition?: (entity: T) => void;
    TransitionTrigger?: ((stateMachine: IStateMachine<T>, transition: BaseTransition<T>) => TransitionCanceler);
}