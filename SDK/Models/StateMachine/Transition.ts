import { BaseTransition, TimerTransition, ConditionalTransition } from "@SDK/Models";

export type Transition<T> = BaseTransition<T> | TimerTransition<T> | ConditionalTransition<T>;