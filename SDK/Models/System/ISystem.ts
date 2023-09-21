import { IUpdatable, IDIsposable } from "@SDK/Models";
import { BaseScene } from "@SDK/Internal";

export interface ISystem extends IUpdatable, IDIsposable {
    Start?(scene: BaseScene): void;
    Stop?(scene: BaseScene): void;
}