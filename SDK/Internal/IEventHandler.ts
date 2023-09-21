export interface IEventHandler {
    EventHandler: Phaser.Events.EventEmitter;

    RegisterEventHandler(name: string | symbol, callback: Function, context?: any): void;
    TriggerEvent(name: string | symbol, ...args: any[]): boolean;
}