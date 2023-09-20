import { IComponentConstructor } from "@SDK/Models";

export type PrefabComponent = {
    Component: IComponentConstructor;
    Data?: {
        [key: string]: any;
    }
}