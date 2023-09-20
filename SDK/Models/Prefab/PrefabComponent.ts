import { IComponentConstructor } from "../Component";

export type PrefabComponent = {
    Component: IComponentConstructor;
    Data?: {
        [key: string]: any;
    }
}