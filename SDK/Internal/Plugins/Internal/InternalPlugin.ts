import { BaseScene, BasePlugin } from "@SDK/Internal";
import { EntityManager, SystemManager } from "@SDK/Models";

export class InternalPlugin extends BasePlugin {
    public Entities: EntityManager;
    public Systems: SystemManager;

    static PluginName: string = "Internal";

    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager) {
        super(scene, pluginManager, InternalPlugin.PluginName);

        this.Entities = new EntityManager(scene);
        this.Systems = new SystemManager(scene);
    }

    public override Start(): void {
        this.Systems.Start();
        this.scene!.events.on(Phaser.Scenes.Events.POST_UPDATE, this.Update, this);
    }

    public override Stop(): void {
        this.Systems.Stop();
        this.scene!.events.off(Phaser.Scenes.Events.POST_UPDATE, this.Update, this);
    }

    public override Update(): void {
        this.Systems.Update();
    }

    public override Destroy(): void {
        this.Entities.Destroy();
        this.Systems.Destroy();
    }

    public override Reset(): void {
        this.Stop();
        this.Destroy();
    }
}