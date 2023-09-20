import { Entity } from "../../models";
import { EntityType } from "../../enums";

export class WorldEntity extends Entity {
    constructor() {
        super(EntityType.WORLD);
    }

    public override Destroy(): void {
        super.Destroy();

        // ...
    }
}