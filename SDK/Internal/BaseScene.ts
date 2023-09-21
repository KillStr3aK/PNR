import { Entity, EntityList, IEntityHandler, PrefabHandler, PrefabComponent, Prefab, InstanceList, IComponentConstructor, ComponentData } from "@SDK/Models";
import { IEventHandler } from "@SDK/Internal";

export abstract class BaseScene extends Phaser.Scene implements IEntityHandler, IEventHandler
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

    public CreateEntity<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }): Entity {
        const entity: T = new EntityInstance(this);
        this.Entities.Add(entity);
        return entity;
    }

    public CreateEntityPrefab<T extends Entity>(EntityInstance: { new(scene: BaseScene): T; }, prefab: Prefab): Entity {
        const entity: Entity = this.CreateEntity<T>(EntityInstance);

        PrefabHandler.GetComponentDefinitions(prefab).forEach((prefabComponent: PrefabComponent) => {
            entity.AddComponent(prefabComponent.Component, prefabComponent.Data as ComponentData[]);
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
        for (const key in this.Entities)
        {
            let entity: Entity = this.Entities[key];
            entity.Update(time, delta);
        }
    }

    public RegisterEventHandler(name: string | symbol, callback: Function, context?: any): void {
        this.events.on(name, callback, context);
    }

    public TriggerEvent(name: string | symbol, ...args: any[]): boolean {
        return this.events.emit(name, ...args);
    }

    update(time: number, delta: number): void {
        this.UpdateEntities(time, delta);
    }
}