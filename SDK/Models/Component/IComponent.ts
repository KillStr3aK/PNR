import { IDisposable, IUpdatable } from "@SDK/Models";

export interface IComponent extends IDisposable, IUpdatable {
    [key: string]: any;
}