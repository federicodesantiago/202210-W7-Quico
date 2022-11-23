import { Character } from './character.js';

export class Squire extends Character {
    master: string;
    ballLevel: number;
    constructor(
        image: string,
        name: string,
        family: string,
        age: number,
        status: boolean,
        sentence: string,
        emoji: string,
        master: string,
        ballLevel: number
    ) {
        super(image, name, family, age, status, sentence, emoji);
        this.master = master;
        this.ballLevel = ballLevel;
    }
}
