function solver(input) {

    let parking = {};

    input.forEach(line => {
        let [command, plateNumber] = line.split(', ');

        if (command === 'IN') {
            parking[plateNumber] = 1;
        } else {
            delete parking[plateNumber];
        }
    });
    
    let result = Object.keys(parking).sort((a, b) => a.localeCompare(b))
        .join('\n');

    if (result !== '') {
        console.log(result)
    } else {
        console.log('Parking Lot is Empty')
    }
}

solver(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

)