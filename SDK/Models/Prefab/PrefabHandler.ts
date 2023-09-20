import { Prefab } from "./Prefab";
import { PrefabComponent } from "./PrefabComponent";

export abstract class PrefabHandler {
    static GetComponentDefinitions(prefab: Prefab): PrefabComponent[] {
        return prefab.Components.map(prefabComponent => {
            if (typeof prefabComponent === "function") {
                return {
                    Component: prefabComponent
                };
            } else {
                return prefabComponent;
            }
        });
    }
}