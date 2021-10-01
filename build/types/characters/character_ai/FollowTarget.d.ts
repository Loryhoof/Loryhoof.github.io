import * as THREE from 'three';
import { ICharacterAI } from '../../interfaces/ICharacterAI';
import { Character } from '../Character';
export declare class FollowTarget implements ICharacterAI {
    character: Character;
    isTargetReached: boolean;
    target: THREE.Object3D;
    policeCar: any;
    private stopDistance;
    private originalTarget;
    private goBackToCar;
    private onDuty;
    private audioSrc;
    constructor(target: THREE.Object3D, stopDistance?: number);
    setTarget(target: THREE.Object3D): void;
    findAudioSource(): void;
    lookForCar(viewVector: any): void;
    update(timeStep: number): void;
}
