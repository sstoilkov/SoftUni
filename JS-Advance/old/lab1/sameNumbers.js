function solver(number) {
    let digits = number.toString().split('')
    let sum = 0;
    let sameDigits = true;
    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
        if(!(Number(digits[0])=== Number(digits[i]))){
            sameDigits = false;
        }
    }
    console.log(sameDigits);
    console.log(sum)
}

solver(1234)