import { ComponentData, IComponent, IComponentable } from "@SDK/Models";

export interface IComponentConstructor {
    new(parent: IComponentable, ...args: ComponentData[]): IComponent;
}