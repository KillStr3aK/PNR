import { BaseScene } from "@SDK/Internal";
import { Entity, Prefab, IComponentConstructor } from "@SDK/Models";

export interface IEntityHandler {
    CreateEntity<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }): Entity;
    CreateEntityPrefab<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }, prefab: Prefab): Entity;
    DeleteEntity(entity: Entity): void;
    DeleteEntityById(instanceId: number): void;
    GetEntitiesByType(type: string): Entity[];
    GetEntitiesWithComponent(component: IComponentConstructor): Entity[];
}