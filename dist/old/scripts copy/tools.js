export const menuOptions = [
    { path: './index.html', label: 'Home' },
    { path: './form.html', label: 'Form' },
];
export const createMenu = () => {
    let menuTemplate = `
            <nav class ="menu">
                <ul>`;
    menuOptions.forEach((item) => {
        menuTemplate += `<li><a href="${item.path}">${item.label}</a></li>`;
    });
    menuTemplate += `
                </ul>
            </nav>`;
    return menuTemplate;
};
