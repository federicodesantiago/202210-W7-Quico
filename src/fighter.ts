import { Character } from './character.js';

export class Fighter extends Character {
    weapon: string;
    skills: number;
    constructor(
        image: string,
        name: string,
        family: string,
        age: number,
        status: boolean,
        sentence: string,
        emoji: string,
        weapon: string,
        skills: number
    ) {
        super(image, name, family, age, status, sentence, emoji);
        this.weapon = weapon;
        this.skills = skills;
    }
}
