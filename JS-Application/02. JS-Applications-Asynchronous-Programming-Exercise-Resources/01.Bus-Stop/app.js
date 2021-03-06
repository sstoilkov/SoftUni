<<<<<<< HEAD
async function getInfo() {
    //read input
    //make request
    //parse data
    //display data
    //error check for request
    const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        stopNameElement.textContent = 'Loading...';
        timeTableElement.replaceChildren();
        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error('Stop ID not found');
        }

        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timeTableElement.appendChild(liElement);
        });

    } catch (error) {
        stopNameElement.textContent = 'Error';
        alert(error.message);
    }
=======
async function getInfo() {
    //read input
    //make request
    //parse data
    //display data
    //error check for request
    const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        stopNameElement.textContent = 'Loading...';
        timeTableElement.replaceChildren();
        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error('Stop ID not found');
        }

        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timeTableElement.appendChild(liElement);
        });

    } catch (error) {
        stopNameElement.textContent = 'Error';
        alert(error.message);
    }
>>>>>>> e529c063bf1de75e3d406046c962e4fdc60827f5
}