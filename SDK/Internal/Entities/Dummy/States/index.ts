import { Entity, State } from "@SDK/Models";
import { DummyIdle } from "./Idle";
import { DummyIdleBlink } from "./IdleBlink";

const DummyStates: State<Entity>[] = [
    DummyIdle,
    DummyIdleBlink
];

export default DummyStates;