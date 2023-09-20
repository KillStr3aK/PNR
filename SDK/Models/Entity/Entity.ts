import { UUIDUtils } from "../../Utils/UUIDUtils";
import { Instance } from "../Instance";

export abstract class Entity extends Instance {
    private ID: string;
    private Type: string;

    private Parent?: Entity;
    private Owner?: Entity;

    constructor(type: string) {
        super();

        this.ID = UUIDUtils.Generate();
        this.Type = type;
    }

    public GetID = (): string => {
        return this.ID;
    }

    public GetType = (): string => {
        return this.Type;
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

    public override Destroy(): void {
        super.Destroy();
    }
}