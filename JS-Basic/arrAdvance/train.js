function train(input) {

    let train = input.shift().split(' ').map((x) => Number(x));
    let maxCapacity = Number(input.shift());

    for (let command of input) {
        let tokens = command.split(' ');

        if (tokens[0] === 'Add') {
            let passengers = Number(tokens[1]);
            train.push(passengers);
        } else {
            let passengers = Number(tokens[0])
            for (let i = 0; i < train.length; i++) {
                if (train[i] + passengers <= maxCapacity) {
                    train[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '))
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)