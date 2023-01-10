const install = document.querySelector('.install');
const cancel = document.querySelector('.cancel');
const logo = document.querySelector('.app_logo');
const circle = document.querySelector('.circle');

install.addEventListener('click', () => {
    install.style.backgroundColor = "#34a85380"
    setTimeout(() => {
        install.style.backgroundColor = "#eee"
        install.style.width = "50%"
        install.style.color = "#747474"
        logo.style.boxShadow = "none"
        logo.style.scale = ".6"
        circle.style.borderWidth = "3px"

        cancel.style.width = "50%"
        cancel.style.marginRight = "7px"
        cancel.style.border = "1px solid #eee"

        setTimeout(() => {
            install.innerHTML = "Open"
        }, 100);
    }, 100);
})