import { ComponentData, IComponent, IComponentable } from "../../Models";

export class EmptyComponent implements IComponent {
    constructor(parent: IComponentable, data?: ComponentData) {
        console.log(`EmptyComponent is attached to entity "${parent.constructor.name}" ${JSON.stringify(data)}`);
    }

    Destroy(): void {
        console.log("EmptyComponent destroyed");
    }
}