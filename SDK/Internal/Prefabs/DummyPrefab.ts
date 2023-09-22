import { Entity, Prefab } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { PhysicsBodyComponent, ColliderComponent, ColliderObjectType, BaseScene, SpriteComponent } from "@SDK/Internal";

export const DummyPrefab: Prefab = {
    Name: "dummy_prefab",
    Components: [
        {
            Component: SpriteComponent,
            Data: {
                X: 400,
                Y: 100,
                Texture: "garfield",
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
                    const entities: Entity[] = scene.Internal.Entities.GetEntities(EntityType.DUMMY);
                    const sprites: Phaser.GameObjects.Sprite[] = [];

                    entities.forEach(entity => {
                        sprites.push(entity.GetComponent<typeof SpriteComponent>(SpriteComponent).Sprite);
                    });

                    return sprites;
                },

                OnProcess: () => { return true; }
            }
        }
    ]
};