import { BaseScene } from "@SDK/Internal";
import { Entity, EntityIdentifier, EntityList, Prefab, IComponentConstructor, IDisposable } from "@SDK/Models";

export interface IEntityHandler extends IDisposable {
    Entities: EntityList;

    CreateEntity<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }): Entity;
    CreateEntityPrefab<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }, prefab: Prefab): Entity;
    DeleteEntity(entity: Entity): void;
    DeleteEntityById(instanceId: number): void;
    GetEntities(identifier: EntityIdentifier): Entity[];
    GetEntitiesByType(type: string): Entity[];
    GetEntitiesWithComponent(component: IComponentConstructor): Entity[];
    GetActiveEntities(): Entity[];
    UpdateEntities(time: number, delta: number): void;
}