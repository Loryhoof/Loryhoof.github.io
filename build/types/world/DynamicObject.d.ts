import * as THREE from 'three';
import * as CANNON from 'cannon';
import { World } from '../world/World';
import { EntityType } from '../enums/EntityType';
import { IWorldEntity } from '../interfaces/IWorldEntity';
export declare class DynamicObject extends THREE.Object3D implements IWorldEntity {
    updateOrder: number;
    entityType: EntityType;
    world: World;
    help: THREE.AxesHelper;
    collision: CANNON.Body;
    materials: THREE.Material[];
    spawnPoint: THREE.Object3D;
    private modelContainer;
    inBlastRadius: boolean;
    constructor(gltf: any, Xmass: number, Xfriction: number);
    update(timeStep: number): void;
    allowSleep(value: boolean): void;
    setPosition(x: number, y: number, z: number): void;
    addToWorld(world: World): void;
    removeFromWorld(world: World): void;
    readObjectData(gltf: any): void;
}
