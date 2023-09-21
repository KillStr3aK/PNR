import { BaseScene } from "@SDK/Internal";
import { Entity, EntityIdentifier, EntityList, IEntityHandler, PrefabHandler, PrefabComponent, Prefab, InstanceList, IComponentConstructor, ComponentData } from "@SDK/Models";

export class EntityManager implements IEntityHandler {
    public Entities: EntityList = new InstanceList<Entity>();

    private Scene: BaseScene;

    constructor(scene: BaseScene) {
        this.Scene = scene;
    }

    public CreateEntity<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }): Entity {
        const entity: T = new EntityInstance(this.Scene);
        this.Entities.Add(entity);
        return entity;
    }

    public CreateEntityPrefab<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }, prefab: Prefab): Entity {
        const entity: Entity = this.CreateEntity<T>(EntityInstance);

        PrefabHandler.GetComponentDefinitions(prefab).forEach((prefabComponent: PrefabComponent) => {
            entity.AddComponent<typeof prefabComponent.Component>(prefabComponent.Component, prefabComponent.Data as ComponentData[]);
        });

        entity.Start();
        return entity;
    }

    public DeleteEntity(entity: Entity): void {
        this.DeleteEntityById(entity.GetInstance());
    }

    public DeleteEntityById(instanceId: number): void {
        if (this.Entities.Contains(instanceId)) {
            let entity: Entity = this.Entities.Get(instanceId);
            entity.Destroy();
            this.Entities.Remove(instanceId);
        } else {
            throw new Error(`Tried to delete invalid entity ${instanceId}`);
        }
    }

    public GetEntities(identifier: EntityIdentifier): Entity[] {
        if (typeof identifier === "string") {
            return this.GetEntitiesByType(identifier);
        } else if (typeof identifier === "function") {
            return this.GetEntitiesWithComponent(identifier);
        } else {
            throw new Error(`BAD_ENTITY_IDENTIFIER::${identifier}`);
        }
    }

    public GetEntitiesByType(type: string): Entity[] {
        return this.Entities.Filter(entity => { return entity.GetType() == type; });
    }

    public GetEntitiesWithComponent(component: IComponentConstructor): Entity[] {
        return this.Entities.Filter(entity => { return entity.HasComponent(component); })
    }

    public GetActiveEntities(): Entity[] {
        return this.Entities.Filter(entity => { return entity.active; });
    }

    public UpdateEntities(time: number, delta: number): void {
        for (const key in this.Entities) {
            let entity: Entity = this.Entities[key];

            entity.Update(time, delta);
            entity.Components.forEach(component => {
                component.Update(time, delta);
            });
        }
    }

    public Destroy(): void {
        for (const key in this.Entities) {
            let entity: Entity = this.Entities[key];
            entity.Destroy();
        }
    }
}