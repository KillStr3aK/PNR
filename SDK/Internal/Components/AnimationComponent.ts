import { Entity, ComponentData, IComponent } from "@SDK/Models";
import { SpriteComponent } from "@SDK/Internal";

export type FrameGenerator = ((sprite: Phaser.GameObjects.Sprite) => Phaser.Types.Animations.AnimationFrame[]);

export class AnimationComponent implements IComponent {
    public Sprite: Phaser.GameObjects.Sprite;
    private Animations: Phaser.Animations.Animation[] = [];

    constructor(parent: Entity, data: ComponentData) {
        if (!parent.HasComponent<typeof SpriteComponent>(SpriteComponent))
        {
            throw new Error(`AnimationComponent on parent entity ${parent.GetType()} (${parent.GetInstance()}) requires a SpriteComponent`);
        }

        this.Sprite = parent.GetComponent<typeof SpriteComponent>(SpriteComponent).Sprite;

        data.Animations.forEach((animationConfig: Phaser.Types.Animations.Animation) => {
            if (typeof animationConfig.frames === "function") {
                animationConfig.frames = (animationConfig.frames as FrameGenerator)(this.Sprite);
            }

            const animation: Phaser.Animations.Animation | false = this.Sprite.anims.create(animationConfig);

            if (typeof animation === "boolean") {
                throw new Error(`Failed to create animation from configuration ${animationConfig}`);
            } else {
                this.Animations.push(animation);
            }
        });
    }

    Destroy(): void {
        this.Animations.forEach(animation => {
            this.Sprite.anims.remove(animation.key);
        });
    }
}