async function attachEvents() {

    const getWeatherBtn = document.getElementById('submit');
    const cityInput = document.getElementById('location');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    getWeatherBtn.addEventListener('click', preview);


    async function preview() {



        const weather = {
            'Sunny': '&#x2600',
            'Partly sunny': '&#x26C5',
            'Overcast': '&#x2601',
            'Rain': '&#x2614',
            'Degrees': '&#176'
        }
        const code = await getWeather(cityInput.value);


        const [forecast, futureForecast] = await Promise.all([
            currentCondition(code), treeDaysForecast(code)]);

        const symbol = weather[forecast.forecast.condition];
        const tempData = `${forecast.forecast.high}${'&#176'}/${forecast.forecast.low}${'&#176'}`;
        const name = forecast.name;

        currentDiv.innerHTML = '';

        currentDiv.innerHTML = `
        <div class="forecasts">
        <span class="condition symbol">${symbol}</span>
        <span class="condition">
            <span class="forecast-data">${name}</span>
            <span class="forecast-data">${tempData}</span>
            <span class="forecast-data">${forecast.forecast.condition}</span>
            </span>
            </div>`


        const div = document.createElement('div');
        div.className = 'forecast-info';
        futureForecast.forecast.forEach(e => {
            const span = document.createElement('span');
            span.className = 'upcoming';

            const spanSym = document.createElement('span');
            spanSym.className = 'symbol';
            spanSym.innerHTML = weather[e.condition];

            const spanTemp = document.createElement('span');
            spanTemp.className = 'forecast-data';
            const temp = `${e.high}/${e.low}`;
            spanTemp.textContent = temp;

            const spanCond = document.createElement('span');
            spanCond.className = 'forecast-data';
            spanCond.textContent = e.condition;

            div.appendChild(span);
            span.appendChild(spanSym);
            span.appendChild(spanTemp);
            span.appendChild(spanCond);
        });

        upcomingDiv.innerHTML = ''
        upcomingDiv.appendChild(div);


        document.getElementById('forecast').style.display = 'block'
    }


}

async function getWeather(city) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const res = await fetch(url);
    const data = await res.json();

    
    const result = data.find(e => e.name == city)

    return result.code;
}

async function currentCondition(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}
async function treeDaysForecast(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}


attachEvents();