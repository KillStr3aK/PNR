import { Registrar, State } from "@SDK/Models";

export type StateSet = {
    ID: string;
    States: State<any>[];
};

export class StateSetRegistrar extends Registrar<State<any>> {
    public Sets: Record<string, string[]> = {};

    public RegisterSets(sets: StateSet[]): void {
        sets.forEach(set => {
            set.States.forEach(state => {
                this.SetValue(state.ID, state);
            });

            this.Sets[set.ID] = set.States.map(state => state.ID);
        });
    }

    public GetSet(id: string): State<any>[] {
        return this.Sets[id].map(state => this.GetValue<State<any>>(state));
    }
}

export const StateSets = new StateSetRegistrar();