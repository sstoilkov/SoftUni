function bombNumber(numberList, bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    let arrayLength = numberList.length
    let result = 0;
    let counter = 0;

    for (i = 0; i < arrayLength; i++) {
        if (bombNumber === numberList[i]) {
            let index = (numberList.indexOf(numberList[i]));
            numberList.splice(index - bombPower, bombPower)
            numberList.splice(index, bombPower);
            counter++;
        }
    }
    for (i = 0; i < numberList.length; i++) {
        result += numberList[i]
    }
    result = result - (counter*bombNumber);
    console.log(result)
}

bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
    
    

    
    
)