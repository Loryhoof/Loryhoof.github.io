import * as THREE from 'three';
import { World } from './World';
import { IUpdatable } from '../interfaces/IUpdatable';
import { default as CSM } from 'three-csm';
export declare class Sky extends THREE.Object3D implements IUpdatable {
    updateOrder: number;
    sunPosition: THREE.Vector3;
    csm: CSM;
    set theta(value: number);
    set phi(value: number);
    private _phi;
    private _theta;
    hemiLight: THREE.HemisphereLight;
    private maxHemiIntensity;
    private minHemiIntensity;
    skyMesh: THREE.Mesh;
    skyMaterial: THREE.ShaderMaterial;
    private world;
    constructor(world: World);
    update(timeScale: number): void;
    refreshSunPosition(): void;
    refreshHemiIntensity(): void;
}
