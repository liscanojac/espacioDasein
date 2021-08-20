window.onload = init()

function init() {

    let navbarIcon = document.getElementById("navbar-icon");

    navbarIcon.addEventListener("click", burgerMenu);
}

function burgerMenu() {

    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const menuList = document.getElementById("menu-list");

    if (closeIcon.classList.contains("d-none")) {

        menuIcon.classList.add("d-none");
        closeIcon.classList.remove("d-none");
        menuList.classList.remove("d-none");

    } else {

        closeIcon.classList.add("d-none");
        menuList.classList.add("d-none");
        menuIcon.classList.remove("d-none");
    }
}