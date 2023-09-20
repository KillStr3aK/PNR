import { IInstance } from "./IInstance";

export type FilterPredicate<T extends IInstance> = (instance: T) => boolean;

export interface IInstanceList<T extends IInstance> {
    [key: number]: T | null;

    Add(instance: T): void;
    Contains(instanceId: number): boolean;
    Get(instanceId: number): T | null;
    Remove(instanceId: number): void;
    Filter(predicate: FilterPredicate<T>): T[];
}