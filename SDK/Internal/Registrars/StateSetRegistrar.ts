import { State } from "@SDK/Models";
import { DummyStateSet } from "@SDK/Internal";

export type StateSet = {
    ID: string;
    States: State<any>[];
};

const States: Record<string, State<any>> = {};
const Sets: Record<string, string[]> = {};

function RegisterSets(sets: StateSet[]): void {
    sets.forEach(set => {
        set.States.forEach(state => {
            States[state.ID] = state;
        });

        Sets[set.ID] = set.States.map(state => state.ID);
    });
}

function GetState(id: string): State<any> {
    return States[id];
}

function GetSet(id: string): State<any>[] {
    return Sets[id].map(stateId => States[stateId]);
}

RegisterSets([
    DummyStateSet
]);

export const StateSetRegistrar = {
    GetState,
    GetSet
}