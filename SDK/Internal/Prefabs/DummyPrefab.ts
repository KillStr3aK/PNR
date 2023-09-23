import { Entity, Prefab } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { PhysicsBodyComponent, StateMachineComponent, ColliderComponent, SpriteComponent, ColliderObjectType, BaseScene, AnimationComponent } from "@SDK/Internal";

export const DummyPrefab: Prefab = {
    Name: "dummy_prefab",
    Components: [
        {
            Component: SpriteComponent,
            Data: {
                X: 400,
                Y: 100,
                Texture: "dummy",
                Scale: 0.5
            }
        },

        {
            Component: AnimationComponent,
            Data: {
                Animations: [
                    {
                        key: "dummy-idle",
                        frames: (sprite: Phaser.GameObjects.Sprite) => { return sprite.anims.generateFrameNumbers("dummy", { start: 0, end: 15 }) },
                        frameRate: 12,
                        repeat: -1
                    },

                    {
                        key: "dummy-idle-blink",
                        frames: (sprite: Phaser.GameObjects.Sprite) => { return sprite.anims.generateFrameNumbers("dummy-blink", { start: 0, end: 15 }) },
                        frameRate: 12,
                        repeat: -1
                    }
                ]
            }
        },

        {
            Component: PhysicsBodyComponent,
            Data: {
                Width: 340,
                Height: 500,
                CollideWithWorldBounds: true,
                MaxVelocityX: 400,
                MaxVelocityY: 600,
                OffsetX: 0,
                OffsetY: 250
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