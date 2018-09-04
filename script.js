let hamContainer = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

function openMenu(){
    hamContainer.classList.toggle('change');
    menu.classList.toggle('menu-open');
}

hamContainer.addEventListener('click', openMenu);

