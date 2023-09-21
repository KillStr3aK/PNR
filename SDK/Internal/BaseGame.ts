import Phaser from "phaser";
import { IEventHandler } from "@SDK/Internal";

export interface IBaseGame {
    EventHandler: Phaser.Events.EventEmitter;
}

export abstract class BaseGame extends Phaser.Game implements IBaseGame, IEventHandler {
    public EventHandler: Phaser.Events.EventEmitter = new Phaser.Events.EventEmitter();

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }

    public RegisterEventHandler = (name: string | symbol, callback: Function, context?: any): void => {
        this.EventHandler.on(name, callback, context);
    }

    public TriggerEvent = (name: string | symbol, ...args: any[]): boolean => {
        return this.EventHandler.emit(name, ...args);
    }
}