import { UUIDUtils } from "../../utils/UUIDUtils";
import { Instance } from "../Instance";

export abstract class Entity extends Instance {
    private ID: string;
    private Type: string;

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
}