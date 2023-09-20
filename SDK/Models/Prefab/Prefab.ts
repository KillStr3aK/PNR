import { PrefabComponent, IComponentConstructor } from "@SDK/Models";

export type Prefab = {
    Name: string | symbol;
    Components: (PrefabComponent | IComponentConstructor)[];
}