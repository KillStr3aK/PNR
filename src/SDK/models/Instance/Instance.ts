import { Componentable } from "../Component";
import { IInstance } from "./IInstance";

export abstract class Instance extends Componentable implements IInstance {
    static Instances: number = 0;

    public Instance: number;

    constructor() {
        super();
        this.Instance = ++Instance.Instances;
    }

    public GetInstance(): number {
        return this.Instance;
    }
}