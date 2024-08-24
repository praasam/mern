document.getElementById('toggle-icon').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    var toggleIcon = document.querySelector('#toggle-icon i');

    if (navList.classList.contains('show')) {
        navList.classList.remove('show');
        toggleIcon.classList.remove('ri-arrow-down-double-line');
        toggleIcon.classList.add('ri-menu-line');
    } else {
        navList.classList.add('show');
        toggleIcon.classList.remove('ri-menu-line');
        toggleIcon.classList.add('ri-arrow-down-double-line');
    }
});

// let navList = document.getElementById("nav-list");
// navList.style.maxHeight = "0px";

// function toggleMenu() {
//     let menuIcon = document.getElementById("toggle-icon");
//     if(navList.style.maxHeight == "0px") {
//         navList.style.maxHeight = "300px";
//         menuIcon.classList.remove("ri-menu-line");
//         menuIcon.classList.add("ri-arrow-down-double-line");
//     } else {
//         menuList.style.maxHeight = "0px";
//         menuIcon.classList.remove("ri-arrow-down-double-line");
//         menuIcon.classList.add("ri-menu-line");
//     }
// }

document.getElementById('toggle-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('psd');
    var toggleIcon = document.querySelector('#toggle-password i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('ri-eye-off-line');
        toggleIcon.classList.add('ri-eye-line');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('ri-eye-line');
        toggleIcon.classList.add('ri-eye-off-line');
    }
});
