import { BaseScene, BasePlugin } from "@SDK/Internal";
import { EntityManager, IUpdatable, SystemManager } from "@SDK/Models";

export class InternalPlugin extends BasePlugin implements IUpdatable {
    public Entities: EntityManager;
    public Systems: SystemManager;

    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager) {
        super(scene, pluginManager);

        this.Entities = new EntityManager(scene);
        this.Systems = new SystemManager(scene);
    }

    public start(): void {
        this.Systems.Start();
        this.scene.events.on(Phaser.Scenes.Events.POST_UPDATE, this.Update, this);
    }

    public stop(): void {
        this.Systems.Stop();
        this.scene.events.off(Phaser.Scenes.Events.POST_UPDATE, this.Update, this);
    }

    public Update(): void {
        this.Systems.Update();
    }

    public destroy(): void {
        this.Entities.Destroy();
        this.Systems.Destroy();
    }

    public reset(): void {
        this.stop();
        this.destroy();
    }

    public shutdown(): void {
        this.stop();
        this.destroy();
    }
}