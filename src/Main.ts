import Phaser from "phaser";
import Scenes from "./Scenes";
import { Game } from "./Models/Game";

const config: Phaser.Types.Core.GameConfig = {
    title: "PNR",
    type: Phaser.AUTO,

    parent: "app",

    width: window.innerWidth,
    height: window.innerHeight,

    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
            debug: true
        },
    },

    scene: Scenes,
};

export default new Game(config);
