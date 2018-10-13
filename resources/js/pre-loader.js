/* ------------------------------------------- */
/* PRE-LOADER | JS / JQ SETUP
/* ------------------------------------------- */

var preLoader;

function preLoaderFun() {
    preLoader = setTimeout(showPage, 1000); // Determines for how long will pre-loader "load"
}

// Shows Page
function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('header').style.display = 'block';
}
