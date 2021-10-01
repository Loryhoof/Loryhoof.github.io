import { ISpawnPoint } from '../interfaces/ISpawnPoint';
import * as THREE from 'three';
import { World } from './World';
import { LoadingManager } from '../core/LoadingManager';
export declare class CharacterAISpawnPoint implements ISpawnPoint {
    private object;
    private activity;
    constructor(object: THREE.Object3D, activity: any);
    spawn(loadingManager: LoadingManager, world: World): void;
}
