import { ComponentData, IComponent } from "../../models";
import { IComponentable } from "../../models";

export class EmptyComponent implements IComponent {
    constructor(parent: IComponentable, data?: ComponentData) {
        console.log(`EmptyComponent is attached to entity '${parent.constructor.name}'`);
    }

    Destroy(): void {
        console.log("EmptyComponent destroyed");
    }
}