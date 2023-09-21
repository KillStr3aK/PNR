import { State, StateData, Transition } from "@SDK/Models";

export type StateMerge = <T>(state1: any, state2: any) => State<T>;

export function StateMerge<T>(state1: Partial<State<T>>, state2: Partial<State<T>>): State<T> {
    const onEnterChain = [state1.OnEnter, state2.OnEnter].filter(Boolean);
    const onUpdateChain = [state1.OnUpdate, state2.OnUpdate].filter(Boolean);
    const onLeaveChain = [state1.OnLeave, state2.OnLeave].filter(Boolean);
    const transitions: Transition<T>[] = [state1.Transitions!, state2.Transitions!].filter(Boolean).flat();

    const data: StateData = { ...state1.Data, ...state2.Data };

    const mergedState: State<T> = {
        ID: (state1.ID || state2.ID)!,
        Transitions: transitions,
        Data: data,
        OnEnter: (entity: T, data: StateData) => onEnterChain.forEach(fn => fn!(entity, data)),
        OnUpdate: (entity: T, data: StateData) => onUpdateChain.forEach(fn => fn!(entity, data)),
        OnLeave: (entity: T, data: StateData) => onLeaveChain.forEach(fn => fn!(entity, data)),
    };

    return mergedState as State<T>
}