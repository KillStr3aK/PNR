import { BaseScene } from "@SDK/Internal";
import { IUpdatable, IDisposable } from "@SDK/Models";

export abstract class BasePlugin extends Phaser.Plugins.ScenePlugin implements IUpdatable, IDisposable {
    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager, pluginKey: string) {
        super(scene, pluginManager, pluginKey);

        this.scene!.events.on(Phaser.Scenes.Events.POST_UPDATE, this.Update, this);
    }

    public start(): void {
        this.Start();
    }

    public stop(): void {
        this.scene!.events.off(Phaser.Scenes.Events.POST_UPDATE, this.Update, this);
        this.Stop();
    }

    public destroy(): void {
        this.Destroy();
    }

    public Start(): void { }
    public Stop(): void { }
    public Destroy(): void { }
    public Update(): void { }
    public Reset(): void { }
}