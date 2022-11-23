import { Character } from './character.js';

export class King extends Character {
    yearsService: number;
    constructor(
        image: string,
        name: string,
        family: string,
        age: number,
        status: boolean,
        sentence: string,
        emoji: string,
        yearsService: number
    ) {
        super(image, name, family, age, status, sentence, emoji);
        this.yearsService = yearsService;
    }
}
