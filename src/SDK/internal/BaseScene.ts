export class BaseScene extends Phaser.Scene
{
    constructor(config: Phaser.Types.Scenes.SettingsConfig)
    {
        super(config);
    }

    public GetWidth(): number {
        return this.game.scale.width;
    };

    public GetHeight(): number {
        return this.game.scale.height;
    };
}