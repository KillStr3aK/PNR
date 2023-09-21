import { BaseScene } from "@SDK/Internal";
import { Entity, EntityList, Prefab, IComponentConstructor } from "@SDK/Models";

export interface IEntityHandler {
    Entities: EntityList;

    CreateEntity<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }): Entity;
    CreateEntityPrefab<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }, prefab: Prefab): Entity;
    DeleteEntity(entity: Entity): void;
    DeleteEntityById(instanceId: number): void;
    GetEntitiesByType(type: string): Entity[];
    GetEntitiesWithComponent(component: IComponentConstructor): Entity[];
    GetActiveEntities(): Entity[];
    UpdateEntities(time: number, delta: number): void;
}