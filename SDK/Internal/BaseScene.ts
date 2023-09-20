import { Entity, EntityList, IEntityHandler, PrefabHandler, PrefabComponent, Prefab, InstanceList, IComponentConstructor, ComponentData } from "@SDK/Models";

export abstract class BaseScene extends Phaser.Scene implements IEntityHandler
{
    public Entities: EntityList = new InstanceList<Entity>();

    constructor(config: Phaser.Types.Scenes.SettingsConfig)
    {
        super(config);
    }

    public GetWidth(): number {
        return this.game.scale.width;
    };

    public GetHeight(): number {
        return this.game.scale.height;
    };

    public GetName(): string {
        return this.scene.key;
    };

    CreateEntity<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }): Entity {
        const entity: T = new EntityInstance(this);
        this.Entities.Add(entity);
        return entity;
    }

    CreateEntityPrefab<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }, prefab: Prefab): Entity {
        const entity: Entity = this.CreateEntity<T>(EntityInstance);

        PrefabHandler.GetComponentDefinitions(prefab).forEach((prefabComponent: PrefabComponent) => {
            entity.AddComponent(prefabComponent.Component, prefabComponent.Data as ComponentData[]);
        });

        return entity;
    }

    DeleteEntity(entity: Entity): void {
        this.DeleteEntityById(entity.GetInstance());
    }

    DeleteEntityById(instanceId: number): void {
        if (this.Entities.Contains(instanceId)) {
            let entity: Entity = this.Entities.Get(instanceId);
            entity.Destroy();
            this.Entities.Remove(instanceId);
        } else {
            console.error(`Tried to delete invalid entity ${instanceId}`);
        }
    }

    GetEntitiesByType(type: string): Entity[] {
        return this.Entities.Filter(entity => { return entity.GetType() == type; });
    }

    GetEntitiesWithComponent(component: IComponentConstructor): Entity[] {
        return this.Entities.Filter(entity => { return entity.HasComponent(component); })
    }
}