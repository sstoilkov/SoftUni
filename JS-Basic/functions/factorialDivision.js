function factorialDivision(firstNumber, secondNumber){
    let firstNumberFactorial = 1;;
    let secondNumberFactorial = 1;
    let result = 0;
    for(let i = firstNumber; i > 0; i--){
        firstNumberFactorial *= i;
    }
    for(let i = secondNumber; i > 0; i--){
        secondNumberFactorial *= i;
    }
    result = (firstNumberFactorial/secondNumberFactorial);
    console.log(result.toFixed(2));
}

factorialDivision(6,2)