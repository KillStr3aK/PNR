import { BaseScene } from "@SDK/Internal";
import { ISystem, ISystemConstructor, IDisposable, IUpdatable} from "@SDK/Models";

export class SystemManager implements IDisposable, IUpdatable {
    private Scene: BaseScene;
    private Systems: ISystem[];

    constructor(scene: BaseScene) {
        this.Scene = scene;
        this.Systems = [];
    }

    public Start(): void {
        this.Systems.forEach(system => {
            if (system.Start) {
                system.Start(this.Scene);
            }
        });
    }

    public Stop(): void {
        this.Systems.forEach(system => {
            if (system.Stop) {
                system.Stop(this.Scene);
            }
        });
    }

    public Update(...args: any[]): void {
        this.Systems.forEach(system => {
            if (system.Update) {
                system.Update(this.Scene, ...args);
            }
        });
    }

    public Destroy(): void {
        this.Systems.forEach(system => {
            if (system.Destroy) {
                system.Destroy();
            }
        });

        this.Systems = [];
    }

    public RegisterSystem(system: ISystemConstructor): void {
        this.Systems.push(new system(this.Scene));
    }

    public RemoveSystem(system: ISystemConstructor): void {
        const systems: ISystem[] = this.Systems.filter(s => s instanceof system);

        systems.forEach(s => {
            if (s.Stop) {
                s.Stop(this.Scene);
            }

            if (s.Destroy) {
                s.Destroy();
            }
        });

        this.Systems = this.Systems.filter(s => !systems.includes(s));
    }

    public RegisterSystems(systems: ISystemConstructor[]): void {
        systems.forEach(system => {
            this.RegisterSystem(system);
        });
    }

    public RemoveSystems(systems: ISystemConstructor[]): void {
        systems.forEach(system => {
            this.RemoveSystem(system);
        });
    }
}