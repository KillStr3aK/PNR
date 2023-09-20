import { IComponentConstructor } from "../Component";
import { PrefabComponent } from "./PrefabComponent";

export type Prefab = {
    Components: (PrefabComponent | IComponentConstructor)[];
}