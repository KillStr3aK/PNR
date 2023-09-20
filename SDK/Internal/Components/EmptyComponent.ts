import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class EmptyComponent implements IComponent {
    constructor(parent: Entity, data?: ComponentData) {
    }

    Destroy(): void {
    }
}