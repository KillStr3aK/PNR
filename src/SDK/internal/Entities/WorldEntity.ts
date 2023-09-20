import { Entity } from "../../models";
import { EntityType } from "../../enums";

export class WorldEntity extends Entity {
    constructor() {
        super(EntityType.WORLD);
    }
}