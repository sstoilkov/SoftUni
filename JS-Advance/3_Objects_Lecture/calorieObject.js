function solver(input) {

    let result = {};
    for (let i = 0; i < input.length; i = i + 2) {
        let name = input[i];
        let calories = Number(input[i + 1]);
        result[name] = calories;
    }
    console.log(result)
}

solver(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])