function solver(input) {

    let register = {
    };

    input.forEach(element => {
        let [country, city, price] = element.split(' > ')

        if (!register[country]) {
            register[country] = {
                destination: []
            }
        };

        if(register[country].destination.city)
        register[country].destination.push({city, price: Number(price)})

        console.log('t')
    });
}

solver([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)