function solver(input) {

    let result = {};
    let sorted;

    input.forEach(e => {
        let [name, price] = e.split(' : ');
        price = Number(price);
        const index = name[0];

        if (!result[index]) {
            result[index] = {};
        }
        result[index][name] = price;
    });

    let initialSort = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (const key of initialSort) {
        let products = Object.entries(result[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach(element => {
            console.log(`  ${element[0]}: ${element[1]}`);
        });
    }
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