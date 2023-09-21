import Phaser from "phaser";
import { WorldEntity, WorldPrefab, BaseScene, DummyEntity, DummyPrefab } from "@SDK/Internal";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Game",
};

export class GameScene extends BaseScene {
    public World!: WorldEntity;

    constructor() {
        super(sceneConfig)
    }

    private DummyTest = (): void => {
        let num: number = 0;

        let interval = setInterval(() => {
            ++num;
            let dummy: DummyEntity = this.CreateEntityPrefab<DummyEntity>(DummyEntity, DummyPrefab);
            console.log(`Dummy UUID: ${dummy.GetID()}\nInstance ID: ${dummy.GetInstance()}\nType: ${dummy.GetType()}`);

            if (num % 30 == 0)
            {
                clearInterval(interval);
            }
        }, 300);
    }

    public init = (): void => {
        this.World = this.CreateEntityPrefab<WorldEntity>(WorldEntity, WorldPrefab);
        this.DummyTest();
    }

    public preload = (): void => {
        this.load.image("garfield", "images/9fb5a15e7f8f744375fb7bcd3a2cddaa.jpg");
    }

    public create = (): void => {
        this.add.text(100, 50, "GAME SCENE", {
            color: "#FFFFFF",
        }).setFontSize(24);
    }
}
