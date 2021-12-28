const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('nav ul');

menuItems.style.maxHeight = "0px";

const toggleMenu = () => {
    if (menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "130px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}

menuIcon.addEventListener('click', toggleMenu);