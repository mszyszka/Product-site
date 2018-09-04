const nav = {
    openMenu: function () {
        document.querySelector('.hamburger').classList.toggle('change');
        document.querySelector('.menu').classList.toggle('menu-open');
    }
}

document.querySelector('.hamburger').addEventListener('click', nav.openMenu);
