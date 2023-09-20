import { Componentable, IInstance } from "@SDK/Models";

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