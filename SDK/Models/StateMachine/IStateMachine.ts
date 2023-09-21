import { State, Transition } from "@SDK/Models";

export interface IStateMachine<T> {
    CurrentState: State<T>;
    DoTransition: (transition: Transition<T>) => void;
}