import { PrefabComponent, IComponentConstructor } from "@SDK/Models";

export type Prefab = {
    Components: (PrefabComponent | IComponentConstructor)[];
}