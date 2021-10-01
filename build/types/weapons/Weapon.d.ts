import * as THREE from 'three';
export declare class Weapon {
    weaponObject: THREE.Object3D;
    position: THREE.Vector3;
    fireRate: number;
    dmg: number;
    ammoType: string;
    ammoCapacity: number;
    ammoInventory: number;
    ammo: number;
    weaponType: string;
    constructor(weaponObject: THREE.Object3D);
}
