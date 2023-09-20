import { SDKVersion } from "@SDK/Enums";
import { BaseGame } from "@SDK/Internal";

export class Game extends BaseGame {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
        console.info(`Initializing game instance ${config.title} with SDK ${SDKVersion.MAJOR}.${SDKVersion.MINOR}.${SDKVersion.PATCH}.${SDKVersion.REVISION}`);
    }
}