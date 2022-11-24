import { characters, charactersType } from './personajes.js';
import { Fighter } from './fighter.js';
import { Adviser } from './adviser.js';
import { King } from './king.js';
import { Squire } from './squire.js';

export function specialProperties(item: charactersType) {
    let characterCode = ' ';
    if (item instanceof Fighter) {
        characterCode += `<li>Arma: ${item.weapon}</li>
                          <li>Destreza: ${item.skills} puntos</li>`;
    }
    if (item instanceof Adviser) {
        characterCode += `<li>Aconseja a: ${item.advised}</li>`;
    }
    if (item instanceof King) {
        characterCode += `<li>Años de servicio: ${item.yearsService} años</li>`;
    }
    if (item instanceof Squire) {
        characterCode += `<li>Sirve a: ${item.master}</li>
                          <li>Nivel de pelotismo: ${item.ballLevel} puntos</li>`;
    }
    return characterCode;
}
