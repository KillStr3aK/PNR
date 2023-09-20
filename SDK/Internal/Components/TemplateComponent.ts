import { Entity, ComponentData, IComponent } from "@SDK/Models";

export class TemplateComponent implements IComponent {
    constructor(parent: Entity, data?: ComponentData) {
    }

    Destroy(): void {
    }
}