import { ISystem, Entity } from "@SDK/Models";
import { BaseScene, StateMachineComponent } from "@SDK/Internal";

export class StateMachineSystem implements ISystem {
    public Update(scene: BaseScene): void {
        const entities: Entity[] = scene.Internal.Entities.GetEntities(StateMachineComponent);

        entities.forEach(entity => {
            entity.GetComponent<typeof StateMachineComponent>(StateMachineComponent).StateMachine.Update();
        });
    }
}