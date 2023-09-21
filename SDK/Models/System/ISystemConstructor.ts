import { ISystem } from "@SDK/Models";
import { BaseScene } from "@SDK/Internal";

export interface ISystemConstructor {
    new(scene: BaseScene): ISystem;
}