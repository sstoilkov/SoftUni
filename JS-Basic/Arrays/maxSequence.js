function maxSequence(list){
    let result = [];
    let topNumber = 0;
    let counter = 0;
for(i = 0; i < list.length; i++){
    let currentNumber = list[i];
    let currentNumberCounter = 0;
    for(j = i + 1; j < list.length; j++){
        if(currentNumber !== list[j]){
            break;
        }else{
            currentNumberCounter++;
        }
    }
    if(currentNumberCounter > counter){
        counter = currentNumberCounter;
        topNumber = currentNumber;
        }
    }
    for(i = 0; i <= counter; i++){
        result.push(topNumber)
    }
    console.log(result.join(' '))
}

maxSequence([4, 4, 4, 4])