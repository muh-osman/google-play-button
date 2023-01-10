const install = document.querySelector('.install');
const cancel = document.querySelector('.cancel');
const logo = document.querySelector('.app_logo');
const circle = document.querySelector('.circle');

install.addEventListener('click', () => {
    setTimeout(() => {
        install.style.backgroundColor = "#eee"
        install.style.width = "50%"
        install.style.color = "#747474"
        logo.style.boxShadow = "none"
        logo.style.scale = ".6"
        circle.style.borderWidth = "3px"
        circle.style.opacity = "1"
        cancel.style.width = "50%"
        cancel.style.marginRight = "7px"
        cancel.style.border = "1px solid #eee"
        
        setTimeout(() => {
            install.innerHTML = "Open"
            setTimeout(() => {
                install.style.cursor = "not-allowed"
            }, 100);
        }, 100);
    }, 100);
})

cancel.addEventListener('click', ()=> {
    circle.style.borderWidth = "0px"
    circle.style.opacity = "0"
    logo.style.scale = "1"
    setTimeout(() => {
        install.style.cursor = "pointer"
        install.style.backgroundColor = "#34a853"
        install.style.width = "100%"
        install.style.color = "#fff"
        logo.style.boxShadow = "0 0 5px 0 #b9b9b9"
        cancel.style.width = "0%"
        cancel.style.marginRight = "0px"
        cancel.style.border = "none"
        setTimeout(() => {
            install.innerHTML = "Install"
        }, 100);
    }, 100);
})