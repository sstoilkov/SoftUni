function solver(input, number) {
    for (let i = 0; i < number; i++) {
        let firstElement = input.pop();
        input.unshift(firstElement);
    }
    console.log(input.join(' '));
}

solver(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)