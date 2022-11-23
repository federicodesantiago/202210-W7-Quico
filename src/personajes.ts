import { Fighter } from './fighter.js';
import { Adviser } from './adviser.js';
import { King } from './king.js';
import { Squire } from './squire.js';

const luchador = new Fighter(
    'Jaime_luchador.webp',
    'Jaime Lannister',
    'Lannister',
    34,
    true,
    'Primero pego y luego pregunto',
    '&#9876',
    'espadaca',
    27
);
const consejero = new Adviser(
    'Tyrion_asesor_Dae.webp',
    'Tyrion Lannister',
    'Targaryen',
    27,
    true,
    'No sé por qué, pero creo que voy a morir pronto',
    '&#127891',
    'Daenerys Targaryen'
);
const rey = new King(
    'Joffrey_rey.webp',
    'Joffrey Baratheon',
    'Lannister',
    14,
    true,
    'Vais a morir todos',
    '&#128081',
    2
);
const luchadora = new Fighter(
    'Daenerys_luchadora.webp',
    'Daenerys Targaryen',
    'Targaryen',
    16,
    true,
    'Primero pego y luego pregunto',
    '&#9876',
    'dragons',
    55
);
const escudero = new Squire(
    'Bronn_escudero_Jai.webp',
    'Bronn',
    'Lannister',
    32,
    true,
    'Soy un loser',
    '&#128737',
    'Jaime Lannister',
    7
);

export const characters = [luchador, consejero, rey, luchadora, escudero];

export type charactersType = {
    image: string;
    name: string;
    family: string;
    age: number;
    status: boolean;
    sentence: string;
    emoji: string;
    advised?: string;
    weapon?: string;
    skill_level?: number;
    years_service?: number;
    master?: string;
    ball_level?: number;
};
