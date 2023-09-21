import { IEventHandler } from "@SDK/Internal";
import { InternalPlugin } from "./Plugins/Internal";

export abstract class BaseScene extends Phaser.Scene implements IEventHandler
{
    public Internal!: InternalPlugin;

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

    public GetName(): string {
        return this.scene.key;
    };

    public GetCurrentFPS(): number {
        return this.game.loop.actualFps;
    }

    public RegisterEventHandler(name: string | symbol, callback: Function, context?: any): void {
        this.events.on(name, callback, context);
    }

    public TriggerEvent(name: string | symbol, ...args: any[]): boolean {
        return this.events.emit(name, ...args);
    }
}