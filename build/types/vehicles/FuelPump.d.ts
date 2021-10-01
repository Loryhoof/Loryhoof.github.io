import * as THREE from 'three';
export declare class FuelPump {
    wheelObject: THREE.Object3D;
    position: THREE.Vector3;
    steering: boolean;
    drive: string;
    rayCastWheelInfoIndex: number;
    constructor(pumpPos: THREE.Object3D);
}
