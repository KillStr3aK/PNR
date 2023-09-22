import { Entity, ComponentData, IComponent } from "@SDK/Models";
import { SpriteComponent, ImageComponent } from "@SDK/Internal";

export enum PhysicsBodyType {
    NONE,
    SPRITE,
    IMAGE
};

export class PhysicsBodyComponent implements IComponent {
    public Body: Phaser.Physics.Arcade.Body;
    public readonly BodyType: PhysicsBodyType;

    constructor(parent: Entity, data?: ComponentData) {
        this.BodyType = parent.HasComponent<typeof SpriteComponent>(SpriteComponent)
            ? PhysicsBodyType.SPRITE : parent.HasComponent<typeof ImageComponent>(ImageComponent) ? PhysicsBodyType.IMAGE : PhysicsBodyType.NONE;

        let object: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite;

        switch (this.BodyType)
        {
            case PhysicsBodyType.IMAGE:
            {
                object = parent.GetComponent<typeof ImageComponent>(ImageComponent).Image;
                parent.scene.physics.add.existing(object) as Phaser.Physics.Arcade.Image;
            } break;

            case PhysicsBodyType.SPRITE:
            {
                object = parent.GetComponent<typeof SpriteComponent>(SpriteComponent).Sprite
                parent.scene.physics.add.existing(object) as Phaser.Physics.Arcade.Sprite;
            } break;

            case PhysicsBodyType.NONE: throw new Error(`PhysicsBodyComponent on parent entity ${parent.GetType()} (${parent.GetInstance()}) requires SpriteComponent or ImageComponent`);
        }

        this.Body = parent.body = object.body as Phaser.Physics.Arcade.Body;
        this.Body.setSize(object.width, object.height);
        this.Body.updateBounds();

        if (data?.MaxVelocityX) {
            this.Body.maxVelocity.x = data.MaxVelocityX;
        }

        if (data?.CollideWithWorldBounds) {
            this.Body.collideWorldBounds = true;
        }
    }

    Destroy(): void {
        this.Body.destroy();
    }
}