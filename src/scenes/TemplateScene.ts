import Phaser from "phaser";
import { BaseScene } from "@SDK/Internal";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Template",
};

export class TemplateScene extends BaseScene {
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
