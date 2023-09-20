import Phaser from "phaser";
import { Entity, EntityManager, WorldEntity, WorldPrefab, BaseScene } from "../../SDK";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends BaseScene {
    constructor() {
        super(sceneConfig)
    }

    public init = (): void => {
        let world1: Entity = EntityManager.CreateEntityPrefab<WorldEntity>(WorldEntity, WorldPrefab);

        console.log(`Entity UUID: ${world1.GetID()}\nInstance ID: ${world1.GetInstance()}`);
    }

    public preload = (): void => {

    }

    public create = (): void => {
        this.add.text(100, 50, 'GAME SCENE', {
            color: '#FFFFFF',
        }).setFontSize(24);
    }
}
