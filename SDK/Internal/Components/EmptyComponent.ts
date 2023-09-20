import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class EmptyComponent implements IComponent {
    constructor(parent: Entity, data?: ComponentData) {
        console.log(`EmptyComponent is attached to entity "${parent.constructor.name}" ${JSON.stringify(data)}`);
    }

    Destroy(): void {
        console.log("EmptyComponent destroyed");
    }
}