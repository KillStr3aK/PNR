import { Prefab } from "@SDK/Models";
import { EmptyComponent } from "@SDK/Internal";

export const TemplatePrefab: Prefab = {
    Name: "template_prefab",
    Components: [
        {
            Component: EmptyComponent,
            Data: {
                Key: "Value"
            }
        }
    ]
};