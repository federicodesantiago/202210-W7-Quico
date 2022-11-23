import { characters, charactersType } from './personajes.js';
import { specialProperties } from './specialProperties.js';
import { aliveOrNot } from './specialProperties.js';

console.log(characters);
let characterCode: string = ' ';
characters.forEach((item) => {
    characterCode += `
    <li class="character col">
                    <div class="card character__card">
                        <img
                            src="../assets/characters/${item.image}"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.name}. <!-- Casa ${item.family} -->
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li id="edad">Edad: ${item.age} años</li>
                                    <li>
                                        Estado:`;

    characterCode += aliveOrNot(item);

    characterCode += `</li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">`;

    characterCode += specialProperties(item);

    characterCode += `</ul>
                                <div class="character__actions">
                                    <button class="character__action btn">
                                        habla
                                    </button>
                                    <button class="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${item.emoji}</i>
                    </div>
                </li>`;
    document.addEventListener('DOMContentLoaded', () => {
        const slot = document.querySelector('#slotCharacter');
        if (slot != null) {
            slot.outerHTML = characterCode;
        }
    });
});
