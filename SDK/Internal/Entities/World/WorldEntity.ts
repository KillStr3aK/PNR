import { Entity } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { BaseScene } from "@SDK/Internal";

export class WorldEntity extends Entity {
    constructor(scene: BaseScene) {
        super(scene, EntityType.WORLD);
    }

    public override Destroy(): void {
        super.Destroy();

        // ...
    }
}