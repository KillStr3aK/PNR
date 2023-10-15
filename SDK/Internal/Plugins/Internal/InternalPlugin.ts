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
    }

    public override Stop(): void {
        this.Systems.Stop();
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