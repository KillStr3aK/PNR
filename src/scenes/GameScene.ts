import Phaser from 'phaser';
import { Entity } from '../SDK';
import { EntityManager } from '../SDK';
import { WorldEntity } from '../SDK/internal/Entities/WorldEntity';
import { WorldPrefab } from '../SDK/internal/Prefabs/WorldPrefab';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
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
