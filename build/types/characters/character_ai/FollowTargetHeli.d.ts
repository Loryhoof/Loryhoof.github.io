import * as THREE from 'three';
import { ICharacterAI } from '../../interfaces/ICharacterAI';
import { Character } from '../Character';
export declare class FollowTargetHeli implements ICharacterAI {
    character: Character;
    isTargetReached: boolean;
    target: THREE.Object3D;
    policeCar: any;
    private stopDistance;
    private originalTarget;
    private goBackToCar;
    private dispatched;
    constructor(target: THREE.Object3D, stopDistance?: number);
    setTarget(target: THREE.Object3D): void;
    update(timeStep: number): void;
}
