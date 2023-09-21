import { IDIsposable, IUpdatable } from "@SDK/Models";

export interface IComponent extends IDIsposable, IUpdatable {
    [key: string]: any;
}