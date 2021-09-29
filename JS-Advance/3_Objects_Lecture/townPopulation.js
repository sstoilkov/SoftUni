function solver(input) {

    let town = {};

    input.forEach(element => {
        let tokens = element.split(' <-> ')
        let name = tokens[0];
        let pop = Number(tokens[1])

        if (town[name]) {
            pop += town[name]
        }
        town[name] = pop;
    });
    for (const name in town) {

        console.log(`${name} : ${town[name]}`);
    }
}


solver(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)