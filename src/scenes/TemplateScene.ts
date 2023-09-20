import Phaser from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Template',
};

export class TemplateScene extends Phaser.Scene {
	constructor() {
		super(sceneConfig)
	}

    public init = (): void => {

    }

	public preload = (): void => {

	}

	public create = (): void => {

	}
}
