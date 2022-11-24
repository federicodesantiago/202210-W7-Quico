import { charactersType } from './personajes';
import { characters } from './personajes';
import { Fighter } from './fighter.js';
import { Adviser } from './adviser.js';
import { King } from './king.js';
import { Squire } from './squire.js';

// export function aliveOrDeadFunction(item: charactersType) {
//     console.log('in funcion');
//     if (item.status) {
//         console.log(item.status);
//         const alive: HTMLElement | null = document.querySelector(
//             `#live${item}`
//         );

//         const die: HTMLElement | null = document.querySelector(`#die${item}`);

//         const characterImage: HTMLElement | null = document.querySelector(
//             `#img${item}`
//         );

//         if (characterImage && alive && die) {
//             alive.style.display = 'none';
//             characterImage.style.rotate = '180deg';
//         }
//     }
//     item.status = false;
// }
