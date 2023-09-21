export interface IEntityBehaviour {
    Awake(): void;
    Start(): void;
    Update(...args: any[]): void;
}