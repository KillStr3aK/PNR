import { Entity, Prefab } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { PhysicsBodyComponent, StateMachineComponent, ColliderComponent, SpriteComponent, ColliderObjectType, BaseScene } from "@SDK/Internal";

export const DummyPrefab: Prefab = {
    Name: "dummy_prefab",
    Components: [
        {
            Component: SpriteComponent,
            Data: {
                X: 400,
                Y: 100,
                Texture: "dummy",
                Scale: 0.25
            }
        },

        {
            Component: PhysicsBodyComponent,
            Data: {
                CollideWithWorldBounds: true
            }
        },

        {
            Component: ColliderComponent,
            Data: {
                Objects: (scene: BaseScene): ColliderObjectType => {
                    return scene.Internal.Entities.GetEntities(EntityType.DUMMY);
                },

                OnProcess: () => { return true; }
            }
        },

        {
            Component: StateMachineComponent,
            Data: {
                StateSet: "dummy",
                InitialStateId: "dummy-idle"
            }
        }
    ]
};