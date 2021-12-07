import { showView, e } from './dom.js';
import { showCreate } from './create.js'
// initialization
// - find relevant section


// - detach from DOM
const section = document.getElementById('home-page');
const catalog = document.querySelector('.card-deck .d-flex .justify-content-center');
section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});
section.remove();
//display logic

export function showHome() {
    showView(section);
    getMovies();
    
}

async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();

    const result = data.map(createMovieCard);
    console.log(result)
    


}

function createMovieCard(movie) {
    const element = e('div', { className: 'card mb-4' });
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
    <div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="#">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;

    return element;
}

window.getMovies = getMovies;