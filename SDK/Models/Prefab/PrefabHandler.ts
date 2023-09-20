import { Prefab, PrefabComponent } from "@SDK/Models";

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