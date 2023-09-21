export type RegistrarValue<T> = T | any;

export abstract class Registrar<T> extends Map<string, RegistrarValue<T>> {
    public GetValue<T>(id: string): T {
        return this.get(id) as T;
    }

    public SetValue<T>(id: string, value: T) {
        this.set(id, value);
    }
}