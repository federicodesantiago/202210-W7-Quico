import { home } from './home.js';
import { form } from './form.js';

//Una opción:

// const main = () => {
//     home();
// };

// document.addEventListener('DOMContentLoaded', main);

//Otra Opción, con una función anónima: (IIFE)

// () => {
//     document.addEventListener('DOMContentLoaded', () => {});
// };

//Hay más opciones. Las que sean que carguen una función.

//IIFE
(() => {
    type MenuOptionsType = {
        path: string;
        label: string;
    };
    const menuOptions: Array<MenuOptionsType> = [
        { path: './index.html', label: 'Home' },
        { path: './form.html', label: 'Form' },
    ];

    const today = new Date();
    let headerTemplate = `
        <header>
            <h1>Learning the DOM</h1>
            <nav>
                <ul>`;

    menuOptions.forEach((item) => {
        headerTemplate += `<li><a href="${item.path}">${item.label}</a></li>`;
    });
    headerTemplate += `
                </ul>
            </nav>
        </header>`;
    const footerTemplate = `
        <footer>
            <address>ISDI Coders</address>
            <p>Madrid, ${today.toDateString}</p>
        </footer>`;
    document.addEventListener('DOMContentLoaded', () => {
        const templates = [headerTemplate, footerTemplate];
        const slots = document.querySelectorAll('slot');
        slots.forEach((item, i) => (item.outerHTML = templates[i]));
        if (location.pathname.includes('index')) {
            home();
        } else {
            form();
        }
    });
})();
