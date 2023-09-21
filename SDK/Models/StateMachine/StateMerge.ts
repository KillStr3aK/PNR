import { State } from "@SDK/Models";

export type StateMerge = <T>(state1: any, state2: any) => State<T>;