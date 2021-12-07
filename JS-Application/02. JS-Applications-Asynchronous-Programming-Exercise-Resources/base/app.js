<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    main.replaceChildren();

    recipes.map(createPreview).forEach(e => main.appendChild(e));
}

function createPreview(recipe) {
    const element = document.createElement('article');
    element.className = 'preview';
    element.innerHTML = `<div class="title">
     <h2>${recipe.name}</h2>
</div>
<div class="small">
    <img src="${recipe.img}">
</div>`

    element.addEventListener('click', () => {
        element.querySelector('h2').textContent = 'Loading...'
        togglePreview(recipe._id, element)
    });
    return element;
}

async function togglePreview(id, preview) {
    const recipe = await getRecipeById(id);

    const element = document.createElement('article');
    element.innerHTML = `<h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${recipe.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map(s => `<p>${s}</p>`).join('')}
    </div>`
    preview.replaceWith(element);
}
/*
  <article class="preview">
            <div class="title">
                <h2>Title</h2>
            </div>
            <div class="small">
                <img src="assets/lasagna.jpg">
            </div>
        </article>
        */

async function getRecipes() {

    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
};

async function getRecipeById(id) {
    const url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;
    const res = await fetch(url);
    const data = await res.json();

    return data;
=======
window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    main.replaceChildren();

    recipes.map(createPreview).forEach(e => main.appendChild(e));
}

function createPreview(recipe) {
    const element = document.createElement('article');
    element.className = 'preview';
    element.innerHTML = `<div class="title">
     <h2>${recipe.name}</h2>
</div>
<div class="small">
    <img src="${recipe.img}">
</div>`

    element.addEventListener('click', () => {
        element.querySelector('h2').textContent = 'Loading...'
        togglePreview(recipe._id, element)
    });
    return element;
}

async function togglePreview(id, preview) {
    const recipe = await getRecipeById(id);

    const element = document.createElement('article');
    element.innerHTML = `<h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${recipe.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map(s => `<p>${s}</p>`).join('')}
    </div>`
    preview.replaceWith(element);
}
/*
  <article class="preview">
            <div class="title">
                <h2>Title</h2>
            </div>
            <div class="small">
                <img src="assets/lasagna.jpg">
            </div>
        </article>
        */

async function getRecipes() {

    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
};

async function getRecipeById(id) {
    const url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;
    const res = await fetch(url);
    const data = await res.json();

    return data;
>>>>>>> e529c063bf1de75e3d406046c962e4fdc60827f5
};