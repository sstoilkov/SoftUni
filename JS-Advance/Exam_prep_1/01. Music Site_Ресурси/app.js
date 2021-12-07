window.addEventListener('load', solve);

function solve() {

    const genreInput = document.querySelector('#genre');
    const nameInput = document.querySelector('#name');
    const authorInput = document.querySelector('#author');
    const dateInput = document.querySelector('#date');
    const addBtn = document.querySelector('#add-btn');

    const collectionDiv = document.querySelector('#all-hits .all-hits-container');
    const totalLikes = document.querySelector('#total-likes p')
    const savedSongsDiv = document.querySelector('#saved-hits .saved-container');


    addBtn.addEventListener('click', add);

    let likes = 0;



    likeeBtn.addEventListener('click', like)

    deleteBtn.addEventListener('click', del);


    function add(event) {
        event.preventDefault();

        const saveBtn = e('button', { className: "save-btn" }, 'Save song');
        const likeeBtn = e('button', { className: "like-btn" }, 'Like song');
        const deleteBtn = e('button', { className: "delete-btn" }, 'Delete');
        
        const gender = genreInput.value;
        const name = nameInput.value;
        const author = authorInput.value;
        const date = dateInput.value;

        const song = e('div', {},
            e('img', { src: "./static/img/img.png" }),
            e('h2', {}, `Gender: ${gender}`),
            e('h2', {}, `Name: ${name}`),
            e('h2', {}, `Author: ${author}`),
            e('h3', {}, `Date: ${date}`),
            saveBtn, likeeBtn, deleteBtn);

        collectionDiv.appendChild(song);

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        saveBtn.addEventListener('click', save.bind(song));
    }

    function like() {
        likes += 1;
        totalLikes.textContent = `Total Likes: ${likes}`
        likeeBtn.disabled = true;
    }

    function save(song) {
        /*const savedSong = e('div', { className: "hits-info" },
        e('img', { src: "./static/img/img.png" }),
        e('h2', {}, `Gender: ${gender}`),
        e('h2', {}, `Name: ${name}`),
        e('h2', {}, `Author: ${author}`),
        e('h3', {}, `Date: ${date}`),
        deleteBtn2);*/

        song.querySelector('#like-btn').remove()
    }
    function del1() {
        song.remove()
    }
    function del2() {
        savedSong.remove()
    }
}


