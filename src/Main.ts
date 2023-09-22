import Phaser from "phaser";
import Scenes from "./Scenes";
import { Game } from "./Models/Game";
import { InternalPlugin, ControlsPlugin } from "@SDK/Internal";

const config: Phaser.Types.Core.GameConfig = {
    title: "PNR",
    type: Phaser.AUTO,

    parent: "app",

    width: window.innerWidth,
    height: window.innerHeight,

    scale: {
        mode: Phaser.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
            debug: true,
            fps: 144
        },
    },

    scene: Scenes,

    plugins: {
        global: [
            // TODO
        ],

        scene: [
            { key: "Internal", plugin: InternalPlugin, mapping: InternalPlugin.PluginName },
            { key: "Controls", plugin: ControlsPlugin, mapping: ControlsPlugin.PluginName }
        ]
    },
};

export default new Game(config);
