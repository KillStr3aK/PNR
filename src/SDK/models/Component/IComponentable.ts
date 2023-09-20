import { IComponent } from "./IComponent";
import { IComponentConstructor } from "./IComponentConstructor";

export interface IComponentable {
    Components: IComponent[];
    AddComponent<T extends IComponentConstructor>(component: T): void;
    HasComponent<T extends IComponentConstructor>(component: T): boolean;
    GetComponent<T extends IComponentConstructor>(component: T): InstanceType<T>;
    Destroy(): void;
}