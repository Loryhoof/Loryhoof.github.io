import { ISpawnPoint } from '../interfaces/ISpawnPoint';
import * as THREE from 'three';
import { World } from './World';
import { LoadingManager } from '../core/LoadingManager';
export declare class DynamicObjectSpawnPoint implements ISpawnPoint {
    private object;
    private type;
    private mass;
    private friction;
    constructor(object: THREE.Object3D, type: string, mass: number, friction: number);
    spawn(loadingManager: LoadingManager, world: World): void;
}
