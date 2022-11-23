import { Character } from './character.js';

export class Adviser extends Character {
    advised: string;
    constructor(
        image: string,
        name: string,
        family: string,
        age: number,
        status: boolean,
        sentence: string,
        emoji: string,
        advised: string
    ) {
        super(image, name, family, age, status, sentence, emoji);
        this.advised = advised;
    }
}
