function solver(firstNumber, secondNumber){
    let biggerGCD = 0;

    for(let i = 0; i < Math.max(firstNumber,secondNumber); i++){
        if(firstNumber % i === 0 && secondNumber % i === 0){
            biggerGCD = i;
        }
    }
    console.log(biggerGCD)
}

solver(2154, 458)