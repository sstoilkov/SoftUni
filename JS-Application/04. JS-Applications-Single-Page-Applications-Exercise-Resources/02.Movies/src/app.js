
import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';

// create placeholder modules for every view
// configurate and testnavigation (event listeners and assotiation button/module)
// implement modules
// - create async func for requests
// - implement DOM logic

document.getElementById("views").style.display = "none";

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister
}

document.querySelector('nav').addEventListener('click', (event) => {
    const view = views[event.target.id];
    if (typeof view == 'function') {
        event.preventDefault();
        view();
    }
});



// Order of views:
// - catalog/home
// - login/register
// - create
// - details
// - likes
// - edit
// - delete


//start application in home view (catalog)
showHome();
