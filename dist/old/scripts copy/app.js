export const app = () => {
    // console.log('App');
    // console.dir(document);
    // const today = new Date();
    // // document.body.innerHTML = `<h1>El día de hoy es ${today.toLocaleDateString()}</h1>`;
    // const pSaludo = document.querySelector('.saludo');
    // console.dir(pSaludo);
    // const handleClic = (event: Event) => {
    //     const element = event.target as HTMLElement;
    //     console.log('click', element.dataset.value);
    // };
    // if (!pSaludo) return;
    // pSaludo.innerHTML = `Hoy es ${today.toLocaleDateString()}`;
    // //Para un solo botón
    // //document.querySelector('button')?.addEventListener('click', handleClic);
    // function handleClic() {
    //     console.log('click');
    // }
    // //Para varios botones
    // const nodeList = document.querySelectorAll('button');
    // nodeList.forEach((item) => item.addEventListener('click', 'handleClic'));
    const handleForm = (event) => {
        event.preventDefault(); //Esto anula el comportamiento por defecto del elemento (en este caso el submit)
        const formElement = event.target;
        const inputs = formElement.querySelectorAll('input');
        const values = [...inputs].map((item) => item.value);
        formElement.querySelector('output').value = `Hola ${values[0]}, felicidades por tus ${values[1]} años.`;
        const p1 = formElement.querySelector('#p1');
        const p2 = formElement.querySelector('#p2');
        p1.hidden = false;
        p2.classList.remove('hidden');
    };
    const form = document.querySelector('form');
    if (!form)
        return;
    form.addEventListener('submit', handleForm);
    const inputHandler = (event) => {
        const element = event.target;
        const output = document.querySelector('nav output');
        if (element.value.length > 3) {
            output.value = `Buscando ${element.value}`;
        }
    };
    const search = document.querySelector('nav input');
    search.addEventListener('input', inputHandler);
};
