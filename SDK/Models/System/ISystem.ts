import { IUpdatable, IDisposable } from "@SDK/Models";
import { BaseScene } from "@SDK/Internal";

export interface ISystem extends IUpdatable, IDisposable {
    Start?(scene: BaseScene): void;
    Stop?(scene: BaseScene): void;
}