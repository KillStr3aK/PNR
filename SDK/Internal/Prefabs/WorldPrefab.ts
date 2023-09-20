import { Prefab } from "@SDK/Models";
import { EmptyComponent } from "@SDK/Internal";

export const WorldPrefab: Prefab = {
    Components: [
        {
            Component: EmptyComponent,
            Data: {
                Key: "Value"
            }
        }
    ]
};