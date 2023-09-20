import * as SDK from "../SDK";

export class Game extends SDK.BaseGame {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
        console.info(`Initializing game instance ${config.title}`);
    }
}