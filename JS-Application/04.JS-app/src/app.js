<<<<<<< HEAD
import { showCatalogPage } from "./catalog.js";
import { showAboutPage, showHomePage } from "./home.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";

document.getElementById('logoutBtn').addEventListener('click', onLogout)
document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,
    'registerBtn': showRegisterPage
}
updateUserNav();
showHomePage();

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const view = sections[event.target.id];
        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
}

export function updateUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}

async function onLogout(event) {
    event.stopImmediatePropagation();
    const { token } = JSON.parse(sessionStorage.getItem('userData'));

    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    });

    sessionStorage.removeItem('userData');
    updateUserNav();
    showHomePage();

}
=======
import { showCatalogPage } from "./catalog.js";
import { showAboutPage, showHomePage } from "./home.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";

document.getElementById('logoutBtn').addEventListener('click', onLogout)
document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,
    'registerBtn': showRegisterPage
}
updateUserNav();
showHomePage();

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const view = sections[event.target.id];
        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
}

export function updateUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}

async function onLogout(event) {
    event.stopImmediatePropagation();
    const { token } = JSON.parse(sessionStorage.getItem('userData'));

    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    });

    sessionStorage.removeItem('userData');
    updateUserNav();
    showHomePage();

}
>>>>>>> e529c063bf1de75e3d406046c962e4fdc60827f5
