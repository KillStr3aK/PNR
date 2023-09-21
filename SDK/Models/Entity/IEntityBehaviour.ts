import { IUpdatable } from "@SDK/Models";

export interface IEntityBehaviour extends IUpdatable {
    Awake(): void;
    Start(): void;
}