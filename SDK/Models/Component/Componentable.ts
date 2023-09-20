import { ComponentData } from "./ComponentData";
import { IComponent } from "./IComponent";
import { IComponentable } from "./IComponentable";
import { IComponentConstructor } from "./IComponentConstructor";

export abstract class Componentable implements IComponentable {
    public Components: IComponent[];

    constructor() {
        this.Components = [];
    }

    public AddComponent<T extends IComponentConstructor>(componentType: T, ...args: ComponentData[]): void {
        this.Components.push(new componentType(this, ...args));
    }

    public GetComponent<T extends IComponentConstructor>(componentType: T): InstanceType<T> {
        const component = this.Components.find(component => { return component instanceof componentType; });

        if (component) {
            return component as InstanceType<T>;
        }

        throw new Error(`COMPONENTABLE::NO_COMPONENT_${typeof componentType}`);
    }

    public HasComponent<T extends IComponentConstructor>(componentType: T): boolean {
        return this.Components.some(component => {
            return component instanceof componentType;
        });
    }

    public Destroy(): void {
        this.Components.forEach(component => {
            component.Destroy();
        })
    }
}