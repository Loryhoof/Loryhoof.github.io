import { CharacterStateBase } from './_stateLibrary';
import { Character } from '../Character';
export declare class StartWalkHoldGun extends CharacterStateBase {
    constructor(character: Character);
    update(timeStep: number): void;
    onInputChange(): void;
}
