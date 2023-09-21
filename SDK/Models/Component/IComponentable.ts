import { IComponent, IComponentConstructor, IDIsposable } from "@SDK/Models";

export interface IComponentable extends IDIsposable {
    Components: IComponent[];
    AddComponent<T extends IComponentConstructor>(component: T): void;
    HasComponent<T extends IComponentConstructor>(component: T): boolean;
    GetComponent<T extends IComponentConstructor>(component: T): InstanceType<T>;
}