function solver(numberString, input1, input2, input3, input4, input5) {

    let input = [input1, input2, input3, input4, input5]

    let number = Number(numberString)

    input.forEach(element => {
        if (element === 'chop') {
            number = number / 2;
            console.log(number);
        } else if (element === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (element === 'spice') {
            number = number + 1;
            console.log(number);
        } else if (element === 'bake') {
            number = number * 3;
            console.log(number);
        } else if (element === 'fillet') {
            number = (number * 0.8).toFixed(1);
            console.log(number);
        }
    });
}

solver('9', 'dice', 'spice', 'chop', 'bake', 'fillet')