function solve() {

    const [name, hall, ticketPrice] = document.querySelectorAll('#container input');
    const movieSection = document.querySelector('#movies ul');
    const arhiveSection = document.querySelector('#archive ul');
    const addMovieButton = document.querySelector('#container button');
    const clearButton = arhiveSection.parentElement.querySelector('button')
    addMovieButton.addEventListener('click', addMovie);
    clearButton.addEventListener('click', (e) => {
        arhiveSection.innerHTML = '';
    });


    function addMovie(e) {
        e.preventDefault();
        if ((name.value).length > 0 && (hall.value).length > 0 && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement('li');
            movie.innerHTML =
                `<span>${name.value}</span>
        <strong>${hall.value}</strong>
        <div>
            <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
            <input placeholder="Tickets Sold">
            <button>Archive</button>
        </div>`
            movieSection.appendChild(movie);

            const button = movie.querySelector('div button');
            button.addEventListener('click', addToArchive);
        }
    }

    function addToArchive(e) {
        const inputValue = e.target.parentElement.querySelector('button');
        const ticketPrice = e.target.parentElement.querySelector('input');
        const movieName = e.target.parentElement.querySelector('span')
        if (inputValue.value != '' && !isNaN(Number(inputValue.value))) {
            const income = Number(inputValue.value) * Number(ticketPrice.value)

            const liEl = document.createElement('li');
            liEl.innerHTML = `<span>${movieName}</span>
                              <strong>Total amount: ${income}</strong>
                              <button>Delete</button>`

            const button = liEl.querySelector('button');
            button.addEventListener('click', deleteEntry);
            arhiveSection.appendChild(liEl);
        }
    }

    function deleteEntry(e) {
        e.target.parentElement.remove();

    }
}
