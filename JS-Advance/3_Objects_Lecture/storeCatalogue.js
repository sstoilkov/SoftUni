function solver(input) {

    let result = {};
    let sorted;

    input.forEach(e => {
        let [name, price] = e.split(' : ');
        price = Number(price);

        result[name] = price;
    });

    for (let prod in result) {
        sorted = Object.entries(result[prod]).sort((a, b) => a.localeCompare(b))
    }
    console.log(sorted)
}

solver(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)