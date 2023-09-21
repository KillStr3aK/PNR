export interface IEventHandler {
    RegisterEventHandler(name: string | symbol, callback: Function, context?: any): void;
    TriggerEvent(name: string | symbol, ...args: any[]): boolean;
}