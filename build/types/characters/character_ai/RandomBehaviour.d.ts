import { ICharacterAI } from '../../interfaces/ICharacterAI';
import { Character } from '../Character';
export declare class RandomBehaviour implements ICharacterAI {
    character: Character;
    private randomFrequency;
    target: Character;
    private stopDistance;
    hasAttacked: boolean;
    readyToBoom: boolean;
    constructor(randomFrequency?: number);
    update(timeStep: number): void;
}
