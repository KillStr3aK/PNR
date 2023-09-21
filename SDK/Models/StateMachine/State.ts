import { StateData, Transition } from "@SDK/Models";

export type State<T> = {
    ID: string;
    Transitions: Transition<T>[];
    Data?: {[key: string]: any},
    OnEnter?: (entity: T, data: StateData) => void;
    OnUpdate?: (entity: T, data: StateData) => void;
    OnLeave?: (entity: T, data: StateData) => void;
}