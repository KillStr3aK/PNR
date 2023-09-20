import { Prefab } from "@SDK/Models";
import { EmptyComponent } from "@SDK/Internal";

export const WorldPrefab: Prefab = {
    Name: "world_prefab",
    Components: [
        {
            Component: EmptyComponent,
            Data: {
                Key: "Value"
            }
        }
    ]
};