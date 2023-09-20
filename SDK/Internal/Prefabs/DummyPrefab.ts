import { Prefab } from "@SDK/Models";
import { PhysicsBodyComponent, ImageComponent } from "@SDK/Internal";

export const DummyPrefab: Prefab = {
    Name: "dummy_prefab",
    Components: [
        {
            Component: ImageComponent,
            Data: {
                X: 400,
                Y: 100,
                Texture: "garfield"
            }
        },

        {
            Component: PhysicsBodyComponent,
            Data: {
                CollideWithWorldBounds: true
            }
        }
    ]
};