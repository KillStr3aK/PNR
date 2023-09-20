import Phaser from "phaser";
import { Entity } from "@SDK/Models";
import { WorldEntity, WorldPrefab, BaseScene } from "@SDK/Internal";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Game",
};

export class GameScene extends BaseScene {
    constructor() {
        super(sceneConfig)
    }

    public init = (): void => {
        let entity: Entity = this.CreateEntityPrefab<WorldEntity>(WorldEntity, WorldPrefab);

        console.log(`Entity UUID: ${entity.GetID()}\nInstance ID: ${entity.GetInstance()}\nType: ${entity.GetType()}`);
    }

    public preload = (): void => {

    }

    public create = (): void => {
        this.add.text(100, 50, "GAME SCENE", {
            color: "#FFFFFF",
        }).setFontSize(24);
    }
}
