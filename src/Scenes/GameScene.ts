import Phaser from "phaser";
import { WorldEntity, WorldPrefab, BaseScene, DummyEntity, DummyPrefab } from "@SDK/Internal";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Game",
};

export class GameScene extends BaseScene {
    public World!: WorldEntity;
    public Label!: Phaser.GameObjects.Text;

    constructor() {
        super(sceneConfig)
    }

    public init = (): void => {
    }

    public preload = (): void => {
        // this.load.image("garfield", "images/9fb5a15e7f8f744375fb7bcd3a2cddaa.jpg");
        this.load.spritesheet("dummy", "animations/dummy/dummy-idle.png", {frameWidth: 900, frameHeight: 900});
        this.load.spritesheet("dummy-blink", "animations/dummy/dummy-idle-blink.png", {frameWidth: 900, frameHeight: 900});
    }

    public create = (): void => {
        this.Label = this.add.text(100, 50, "GAME SCENE", {
            color: "#FFFFFF",
        }).setFontSize(24);

        this.World = this.Internal.Entities.CreateEntityPrefab<WorldEntity>(WorldEntity, WorldPrefab);
        this.DummyTest();
    }

    update(time: number, delta: number): void {
        this.Label.text = `GAME SCENE (${this.GetCurrentFPS().toFixed(2)} FPS | ${delta.toFixed(3)} ms)`;
    }

    private DummyTest = (): void => {
        let num: number = 0;

        let interval = setInterval(() => {
            ++num;
            this.Internal.Entities.CreateEntityPrefab<DummyEntity>(DummyEntity, DummyPrefab);

            if (num % 10 == 0)
            {
                clearInterval(interval);
            }
        }, 500);
    }
}
