import * as THREE from 'three';
import { ICharacterAI } from '../../interfaces/ICharacterAI';
import { Character } from '../Character';
export declare class PlayBasketball implements ICharacterAI {
    character: Character;
    private randomFrequency;
    target: THREE.Object3D;
    wantsToPlay: boolean;
    constructor(randomFrequency?: number);
    update(timeStep: number): void;
}
