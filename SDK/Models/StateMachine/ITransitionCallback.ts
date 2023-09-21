export interface ITransitionCallback {
    <T>(entity: T): void;
}