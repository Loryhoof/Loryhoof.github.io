import * as THREE from 'three';
import { ISpawnPoint } from '../interfaces/ISpawnPoint';
export declare class ParachuteSpawnPoint implements ISpawnPoint {
    private object;
    private world;
    constructor(object: THREE.Object3D);
    spawn(): void;
}
