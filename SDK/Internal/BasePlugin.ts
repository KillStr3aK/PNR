import { BaseScene } from "@SDK/Internal";

export abstract class BasePlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager, pluginKey: string) {
        super(scene, pluginManager, pluginKey);
    }
}