function solver(input) {
    let result = {};
    input.forEach(e => {
        let [town, productName, price] = e.split(' | ');
        price = Number(price);

        if (!result[productName]) {
            result[productName] = {};
        }
        result[productName][town] = price;
    });

    for (const prod in result) {
        const sorted = Object.entries(result[prod]).sort((a, b) => a[1] - b[1])

        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}

solver(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)