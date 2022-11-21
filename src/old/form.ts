type DataFormType = {
    userName: string;
    age: number;
    isOK: boolean;
    course: string;
    turn: string;
};

const handleForm = (event: Event) => {
    const dataForm: DataFormType = {
        userName: '',
        age: 0,
        isOK: false,
        course: '',
        turn: '',
    };

    event.preventDefault(); //Esto anula el comportamiento por defecto del elemento (en este caso el submit)
    const formElement = event.target as HTMLFormElement;
    const inputs = [
        ...formElement.querySelectorAll('[type=text]'),
        ...formElement.querySelectorAll('[type=number]'),
        ...formElement.querySelectorAll('select'),
    ];
    const checkIsOk = formElement.querySelector('[type=checkbox]');

    const values = [...inputs].map((item) => (item as HTMLFormElement).value);
    dataForm.userName = values[0];
    dataForm.age = +values[1];
    dataForm.course = values[2];
    dataForm.isOK = (checkIsOk as HTMLInputElement).checked;
    const radioTurn = formElement.querySelectorAll('[name="turn"]'); //type =radio no por si hay más
    const radioSelected = [...radioTurn].find(
        (item) => (item as HTMLInputElement).checked
    ) as HTMLInputElement;
    dataForm.turn = radioSelected.value;
    //Devuelve el elemento que tenga el checked true
    console.log(radioTurn);
    console.log(dataForm);
};

export const form = () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', handleForm);
};
