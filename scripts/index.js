const ButtonElement = document.querySelector('#ThemeToggler');

ButtonElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
