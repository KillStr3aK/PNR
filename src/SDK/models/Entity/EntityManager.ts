import { Entity } from "./Entity";
import { InstanceList } from "../Instance";
import { Prefab, PrefabComponent } from "../Prefab";
import { ComponentData, IComponentConstructor } from "../Component";
import { PrefabHandler } from "../Prefab/PrefabHandler";

export type EntityList = InstanceList<Entity>;

export abstract class EntityManager {
    static Entities: EntityList = new InstanceList<Entity>();

    static CreateEntity<T extends Entity>(EntityCreator: { new(): T; }): Entity {
        const entity: T = new EntityCreator();
        EntityManager.Entities.Add(entity);
        return entity;
    }

    static CreateEntityPrefab<T extends Entity>(EntityCreator: { new(): T; }, prefab: Prefab): Entity {
        const entity: Entity = EntityManager.CreateEntity<T>(EntityCreator);

        PrefabHandler.GetComponentDefinitions(prefab).forEach((prefabComponent: PrefabComponent) => {
            entity.AddComponent(prefabComponent.Component, prefabComponent.Data as ComponentData[]);
        });

        return entity;
    }

    static DeleteEntity(instanceId: number): void {
        if (EntityManager.Entities.Contains(instanceId)) {
            let entity: Entity = EntityManager.Entities.Get(instanceId);
            entity.Destroy();
            EntityManager.Entities.Remove(instanceId);
        } else {
            console.error(`Tried to delete invalid entity ${instanceId}`);
        }
    }

    static GetEntitiesByType(type: string): Entity[] {
        return EntityManager.Entities.Filter(entity => { return entity.GetType() == type; });
    }

    static GetEntitiesWithComponent(component: IComponentConstructor): Entity[] {
        return EntityManager.Entities.Filter(entity => { return entity.HasComponent(component); })
    }
}