import Phaser from "phaser";
import { IEventHandler } from "@SDK/Internal";

export abstract class BaseGame extends Phaser.Game implements IEventHandler {
    public EventHandler: Phaser.Events.EventEmitter = new Phaser.Events.EventEmitter();

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);

        window.addEventListener("resize", () => {
            this.TriggerEvent("OnWindowResized");
        });

        this.RegisterEventHandler("OnWindowResized", this.RefreshScale, this);
    }

    private RefreshScale = (): void => {
        this.scale.refresh();
    };

    public RegisterEventHandler = (name: string | symbol, callback: Function, context?: any): void => {
        this.EventHandler.on(name, callback, context);
    }

    public TriggerEvent = (name: string | symbol, ...args: any[]): boolean => {
        return this.EventHandler.emit(name, ...args);
    }
}