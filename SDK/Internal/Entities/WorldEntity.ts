import { Entity } from "../../Models";
import { EntityType } from "../../Enums";

export class WorldEntity extends Entity {
    constructor() {
        super(EntityType.WORLD);
    }

    public override Destroy(): void {
        super.Destroy();

        // ...
    }
}