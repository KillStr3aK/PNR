import { Entity } from "@SDK/Models";
import { EntityType } from "@SDK/Enums";
import { BaseScene } from "@SDK/Internal";

export class DummyEntity extends Entity {
    constructor(scene: BaseScene) {
        super(scene, EntityType.DUMMY);
    }
}