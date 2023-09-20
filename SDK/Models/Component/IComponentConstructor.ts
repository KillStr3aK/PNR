import { IComponent } from "./IComponent";
import { ComponentData } from "./ComponentData";
import { IComponentable } from "./IComponentable";

export interface IComponentConstructor {
    new(parent: IComponentable, ...args: ComponentData[]): IComponent;
}