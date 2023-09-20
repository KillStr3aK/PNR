import { IInstance, IInstanceList, FilterPredicate } from "@SDK/Models";

export class InstanceList<T extends IInstance> implements IInstanceList<T> {
    [key: number]: T;

    public Add(obj: T): void {
        this[obj.GetInstance()] = obj;
    }

    public Contains(instanceId: number): boolean {
        return this[instanceId] !== undefined;
    }

    public Get(instanceId: number): T {
        return this[instanceId];
    }

    public Remove(instanceId: number): void {
        delete this[instanceId];
    }

    public Filter(predicate: FilterPredicate<T>): T[] {
        let instances: T[] = [];

        for (const key in this) {
            let instance: T = this[key];

            if (instance && predicate(instance)) {
                instances.push(instance);
            }
        }

        return instances;
    }
}