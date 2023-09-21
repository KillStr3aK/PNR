import { UUIDUtils } from "@SDK/Utils";
import { BaseScene } from "@SDK/Internal";
import { IEntityBehaviour, InstanceList, IInstance, IComponentable, IComponent, IComponentConstructor, ComponentData } from "@SDK/Models";

export type EntityList = InstanceList<Entity>;

export abstract class Entity extends Phaser.GameObjects.GameObject implements IEntityBehaviour, IInstance, IComponentable {
    static Instances: number = 0;

    public Instance: number;

    public Components: IComponent[];

    private ID: string;

    private Parent?: Entity;
    private Owner?: Entity;

    constructor(scene: BaseScene, type: string) {
        super(scene, type);

        this.ID = UUIDUtils.Generate();
        this.Instance = ++Entity.Instances;
        this.Components = [];

        this.Awake();

        this.scene.events.on(Phaser.Scenes.Events.POST_UPDATE, this.InternalUpdate, this);
    }

    private InternalUpdate(time: number, delta: number): void {
        this.Update(time, delta);

        this.Components.forEach(component => {
            if (component.Update) {
                component.Update(time, delta);
            }
        });
    }

    public GetInstance(): number {
        return this.Instance;
    }

    public GetID = (): string => {
        return this.ID;
    }

    public GetType = (): string => {
        return this.type;
    }

    public GetParent = (): Entity | undefined => {
        return this.Parent;
    }

    public GetOwner = (): Entity | undefined => {
        return this.Owner;
    }

    public SetParent = (entity: Entity): void => {
        this.Parent = entity;
    }

    public SetOwner = (entity: Entity): void => {
        this.Owner = entity;
    }

    public GetScene(): BaseScene {
        return this.scene as BaseScene;
    }

    public AddComponent<T extends IComponentConstructor>(componentType: T, ...args: ComponentData[]): void {
        this.Components.push(new componentType(this, ...args));
    }

    public GetComponent<T extends IComponentConstructor>(componentType: T): InstanceType<T> {
        const component = this.Components.find(component => { return component instanceof componentType; });

        if (component) {
            return component as InstanceType<T>;
        }

        throw new Error(`ENTITY::NO_COMPONENT_${typeof componentType}`);
    }

    public HasComponent<T extends IComponentConstructor>(componentType: T): boolean {
        return this.Components.some(component => {
            return component instanceof componentType;
        });
    }

    public Destroy(): void {
        this.Components.forEach(component => {
            if (component.Destroy) {
                component.Destroy();
            }
        })
    }

    public Awake(): void { }

    public Start(): void { }

    public Update(...args: any[]): void { }
}