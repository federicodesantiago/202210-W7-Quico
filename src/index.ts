import { characters, charactersType } from './personajes.js';
import { specialProperties } from './specialProperties.js';

let characterCode: string = ' ';
characters.forEach((item) => {
    characterCode += `
    <li class="character col">
                    <div class="card character__card">
                        <img
                            src="./assets/characters/${item.image}"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                            id="img${item.name.split(' ')[0]}"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.name}. <!-- Casa ${item.family} -->
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li id="edad">Edad: ${item.age} años</li>
                                    <li>
                                        Estado:
                                        <i class="fas fa-thumbs-up" id="lives${
                                            item.name.split(' ')[0]
                                        }"></i>
        <i class="fas fa-thumbs-down" id="dies${
            item.name.split(' ')[0]
        }"></i> `;

    // characterCode += aliveOrNot(item);

    characterCode += `</li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">`;

    characterCode += specialProperties(item);

    characterCode += `</ul>
                                <div class="character__actions">
                                    <button class="character__action btn" id="speakButton${
                                        item.name.split(' ')[0]
                                    }">
                                        habla
                                    </button>
                                    <button class="character__action btn" id="deadButton${
                                        item.name.split(' ')[0]
                                    }">
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

        const dieButton = document.querySelector(
            `#deadButton${item.name.split(' ')[0]}`
        );
        dieButton?.addEventListener('click', () => {
            const dies: HTMLElement | null = document.querySelector(
                `#dies${item.name.split(' ')[0]}`
            );
            const lives: HTMLElement | null = document.querySelector(
                `#lives${item.name.split(' ')[0]}`
            );
            const characterImage: HTMLElement | null = document.querySelector(
                `#img${item.name.split(' ')[0]}`
            );
            if (dies != null) {
                dies.style.display = 'initial';
            }
            if (lives != null) {
                lives.style.display = 'none';
            }
            if (characterImage != null) {
                characterImage.style.rotate = '180deg';
            }
        });
        item.status = false;
    });
});

let characterCodeCom: string = ' ';
characters.forEach((item) => {
    characterCodeCom += `<div class="comunications">
            <p class="comunications__text display-1">
                Una frase que dice alguien
            </p>
            <img
                id="img${item.name.split(' ')[0]}"
                class="comunications__picture"
                src=" "
                alt="${item.name}"
            />
        </div>`;
    document.addEventListener('DOMContentLoaded', () => {
        const slotCom = document.querySelector('#slotCharacterCom');
        if (slotCom != null) {
            slotCom.outerHTML = characterCodeCom;
        }
        const speakButton = document.querySelector(
            `#speakButton${item.name.split(' ')[0]}`
        );
        speakButton?.addEventListener('click', () => {
            const speakInner: HTMLElement | null =
                document.querySelector('.display-1');
            console.log(speakInner);
            if (speakInner != null) {
                speakInner.innerHTML = `${item.sentence}`;
            }
            const speakImg: HTMLImageElement | null = document.querySelector(
                `#img${item.name.split(' ')[0]}`
            );
            if (speakImg != null) {
                speakImg.src = './assets/characters/${item.image}';
            }
            const speakOn: HTMLElement | null =
                document.querySelector('.comunications');
            if (speakOn != null) {
                speakOn.classList.add('on');
            }
            setTimeout(() => {
                speakOn?.classList.remove('on');
            }, 2000);
        });
    });
});
