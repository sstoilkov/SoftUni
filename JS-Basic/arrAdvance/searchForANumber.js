function searchForANumber(input, command){
    let numberOfElements = command[0];
    let numberOfDeleteElements = command[1];
    let searchElement = command[2];
    let resultArray =[];
    let counter = 0;

    for( i = 0; i < numberOfElements; i++){
        resultArray.push(input[i])
    }
    resultArray.splice(0,numberOfDeleteElements);
    for(i = 0; i < resultArray.length; i++){
        if(searchElement === resultArray[i]){
            counter++;
        }
    }

    console.log(`Number ${searchElement} occurs ${counter} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )