import Phaser from "phaser";
import Scenes from "./Scenes";
import { Game } from "./Models/Game";

const config: Phaser.Types.Core.GameConfig = {
    title: "PNR",
    type: Phaser.AUTO,

    parent: "app",

    width: window.innerWidth,
    height: window.innerHeight,

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
        },
    },

    scene: Scenes,
};

export default new Game(config);