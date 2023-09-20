import { Entity, ComponentData, IComponent, IComponentable } from "@SDK/Models";

export interface IComponentConstructor {
    new(parent: Entity, ...args: ComponentData[]): IComponent;
}