import Phaser from "phaser";
import { Entity } from "@SDK/Models";
import { WorldEntity, WorldPrefab, BaseScene, DummyEntity, DummyPrefab, PhysicsBodyComponent } from "@SDK/Internal";

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

        let dummy: DummyEntity = this.CreateEntityPrefab<DummyEntity>(DummyEntity, DummyPrefab);
        dummy.GetComponent(PhysicsBodyComponent).Body.setVelocity(100, 200);
        dummy.GetComponent(PhysicsBodyComponent).Body.setBounce(1, 1);
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
