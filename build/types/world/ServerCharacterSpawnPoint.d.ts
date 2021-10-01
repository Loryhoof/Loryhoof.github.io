import * as THREE from 'three';
import { World } from './World';
export declare class ServerCharacterSpawnPoint {
    private object;
    constructor(object: THREE.Object3D);
    spawn(world: World): void;
}
