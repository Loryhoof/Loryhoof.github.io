import { Character } from '../characters/Character';
import * as THREE from 'three';
export declare class ClothingStore {
    storeDisplay: any;
    noShirt: any;
    blueShirt: any;
    redShirt: any;
    blackShirt: any;
    characterInStore: any;
    colorRed: THREE.Color;
    colorYellow: THREE.Color;
    colorGray: THREE.Color;
    colorPurple: THREE.Color;
    colorLightBlue: THREE.Color;
    colorPink: THREE.Color;
    colorBrown: THREE.Color;
    colorOrange: THREE.Color;
    colorBlack: THREE.Color;
    colorBlue: THREE.Color;
    colorWhite: THREE.Color;
    colorGreen: THREE.Color;
    constructor(character: Character);
    readUIData(): void;
    onChange(character: Character): void;
    onOut(character: Character): void;
}
