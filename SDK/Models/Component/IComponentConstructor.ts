import { Entity, ComponentData, IComponent } from "@SDK/Models";

export interface IComponentConstructor {
    new(parent: Entity, ...args: ComponentData[]): IComponent;
}