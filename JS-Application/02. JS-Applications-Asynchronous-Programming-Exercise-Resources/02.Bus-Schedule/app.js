<<<<<<< HEAD
function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        departBtn.disabled = true;
        //get info about next stop
        //diplay name of next stop

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const res = await fetch(url);
        stop = await res.json();
        
        label.textContent = `Next stop ${stop.name}`;

        //activate other button
        
        arriveBtn.disabled = false;

    }

    function arrive() {
        //display name of the stop
        label.textContent = `Arriving at ${stop.name}`

        //activate other button
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

=======
function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        departBtn.disabled = true;
        //get info about next stop
        //diplay name of next stop

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const res = await fetch(url);
        stop = await res.json();
        
        label.textContent = `Next stop ${stop.name}`;

        //activate other button
        
        arriveBtn.disabled = false;

    }

    function arrive() {
        //display name of the stop
        label.textContent = `Arriving at ${stop.name}`

        //activate other button
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

>>>>>>> e529c063bf1de75e3d406046c962e4fdc60827f5
let result = solve();