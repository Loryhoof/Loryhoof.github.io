import * as THREE from 'three';
import { ICharacterAI } from '../../interfaces/ICharacterAI';
import { Character } from '../Character';
export declare class DrivingNPC implements ICharacterAI {
    character: Character;
    isTargetReached: boolean;
    target: THREE.Object3D;
    policeCar: any;
    private stopDistance;
    private originalTarget;
    private goBackToCar;
    private onDuty;
    private audioSrc;
    targetMap: any[];
    targetCounter: number;
    donePushing: boolean;
    objectInfront: boolean;
    objectsExceptSelf: any[];
    constructor(target: THREE.Object3D, stopDistance?: number);
    setTarget(): void;
    pushAllTargets(): void;
    avoidCollision(viewVector: any): void;
    update(timeStep: number): void;
}
