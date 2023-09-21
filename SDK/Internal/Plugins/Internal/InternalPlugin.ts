import { BaseScene, BasePlugin } from "@SDK/Internal";
import { EntityManager } from "@SDK/Models";

export class InternalPlugin extends BasePlugin {
    public Entities: EntityManager;

    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager) {
        super(scene, pluginManager);

        this.Entities = new EntityManager(scene);
    }

    public start(): void {

    }

    public stop(): void {

    }

    public update(): void {

    }

    public destroy(): void {
        this.Entities.Destroy();
    }

    public reset(): void {

    }

    public shutdown(): void {
        this.stop();
        this.destroy();
    }
}