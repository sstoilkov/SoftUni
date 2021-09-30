function solver(input) {
    const result = [];
    const splitted = input[0].split('|');

    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();


    for (let i = 1; i < input.length; i++) {
        const obj = {};
        let tokens = input[i].split('|');
        currentLatitude = Number(tokens[2].trim());
        currentLatitude = Number(currentLatitude.toFixed(2));
        currentLongitude = Number(tokens[3].trim());
        currentLongitude= Number(currentLongitude.toFixed(2));
        obj[town] = tokens[1].trim();
        obj[latitude] = currentLatitude;
        obj[longitude] = currentLongitude;
        result.push(obj)
    }
    return JSON.stringify(result);
}

solver(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)