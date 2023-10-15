import { IComponent, IComponentConstructor, IDisposable } from "@SDK/Models";

export interface IComponentable extends IDisposable {
    Components: IComponent[];
    AddComponent<T extends IComponentConstructor>(component: T): void;
    HasComponent<T extends IComponentConstructor>(component: T): boolean;
    GetComponent<T extends IComponentConstructor>(component: T): InstanceType<T>;
}