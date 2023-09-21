import { BaseScene } from "@SDK/Internal";
import { IUpdatable, IDIsposable } from "@SDK/Models";

export abstract class BasePlugin extends Phaser.Plugins.ScenePlugin implements IUpdatable, IDIsposable {
    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager, pluginKey: string) {
        super(scene, pluginManager, pluginKey);
    }

    public start(): void {
        this.Start();
    }

    public stop(): void {
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