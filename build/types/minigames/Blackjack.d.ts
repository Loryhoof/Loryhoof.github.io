import { World } from '../world/World';
export declare class Blackjack {
    subtitleUI: any;
    subtitleCollection: any[];
    reached: boolean;
    payoutAmount: number;
    amountEach: number;
    remainingAmount: number;
    previousTotal: number;
    constructor(world: World);
    animateValue(id: any, start: any, end: any, duration: any): void;
    initHeist(atPoint: any, player: any): void;
    returnBack(atPoint: any, player: any): void;
}
