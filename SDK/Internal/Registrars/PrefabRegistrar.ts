import { Prefab } from "@SDK/Models";
import { WorldPrefab, DummyPrefab } from "../Prefabs";

const Prefabs: Record<string | symbol, Prefab> = {};

function RegisterPrefabs(prefabs: Prefab[]): void {
    prefabs.forEach(prefab => {
        Prefabs[prefab.Name] = prefab;
    });
}

function GetPrefab(name: string | symbol): Prefab {
    return Prefabs[name];
}

RegisterPrefabs([
    WorldPrefab,
    DummyPrefab
]);

export const PrefabRegistrar = {
    GetPrefab
};