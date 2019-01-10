/* -------------------------------------- */
/* Navigation | jQuery Setup
/* -------------------------------------- */
/*
$(document).ready(function() {
    $("#menuIcon").click(function() {
        $("#mainMenu").css("left", "0px");
        function showMenu() {
            $("#mainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
            $("#menuIcon").animate({right: '-100'}, 300);
        }
        setTimeout(showMenu, 100);
    });

    $("#close").click(function() {
        $("#mainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
        function hideMenu() {
            $("#mainMenu").css("left", "-500px");
            $("#menuIcon").animate({right: '50'}, 300);
        }
        setTimeout(hideMenu, 300);

        function originalLayout() {
            $("#mainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout, 600);
    });
});
*/

/* -------------------------------------------- */
/* Navigation | JavaScript Setup | For exercise
/* -------------------------------------------- */
// - JavaScript ES6 Only - \\

// DOM Elements
const menuIcon = document.querySelector('#menuIcon');
const mainMenu = document.querySelector('#mainMenu');
const close = document.querySelector('#close');

// - EVENT LISTENER | - Menu Icon | Burger icon
menuIcon.addEventListener('click', () => {
    mainMenu.style.left = '0px'; // Sets left position of menu to 0px (not diplaying)

    // - FUNCTION | - Showing Menu On Click
    const showMenu = () => {
        mainMenu.style.clipPath = 'polygon(0 0,100% 0,100% 100%,0% 100%)';  // Gives it a clip-path when showMenu transition starts
        menuIcon.style.right = '-100'; // - Moves menu to the right (-100) which is basically the left (because its negative value)
    };
    setTimeout(showMenu, 100); // Setting time out when to showMenu
});

// - EVENT LISTENER | - Closing Menu Icon
close.addEventListener('click', () => {
    mainMenu.style.clipPath = 'polygon(0 0,0% 0,100% 100%,0% 100%)'; // Gives menu a clip-path when its closing

    // - FUNCTION | - Closing Menu On Click
    const hideMenu = () => {
        mainMenu.style.left = '-500px'; // Moves the menu to the left (-500) which is basically the right (because its negative value)
        menuIcon.style.right = '50'; // Centers menu to the right (50) - Center
    };
    setTimeout(hideMenu, 300); // Setting time out when to hideMenu

    // - FUNCTION | - Displaying the original menu layout
    const originalLayout = () => {
        mainMenu.style.clipPath = 'polygon(0 0,100% 0,0% 100%,0% 100%)';
    };
    setTimeout(originalLayout, 600); // Setting time out when to show original layout
});