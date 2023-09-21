import { BaseScene, BasePlugin } from "@SDK/Internal";

export class ControlsPlugin extends BasePlugin {
    static PluginName: string = "Controls";

    constructor(scene: BaseScene, pluginManager: Phaser.Plugins.PluginManager) {
        super(scene, pluginManager, ControlsPlugin.PluginName);
    }
}