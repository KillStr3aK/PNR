import Phaser from "phaser";
import { BaseScene } from "@SDK/Internal";
import { Button } from "@SDK/UI";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "MainMenu",
};

export class MainMenuScene extends BaseScene {
    constructor() {
        super(sceneConfig)
    }

    public create = (): void => {
        this.add.text(100, 50, "MAIN MENU", {
            color: "#FFFFFF",
        }).setFontSize(24);

        new Button(this, 100, 150, "START", () => {
            this.scene.start("Game");
        });

        new Button(this, 100, 250, "Settings", () => console.log("SETTINGS CLICKED"));
    }
}
