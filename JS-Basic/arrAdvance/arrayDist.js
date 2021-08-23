function arrayDist(input){
    let resultArray =[];

    for( i = 0; i<input.length; i++){
        if(!resultArray.includes(input[i])){
            resultArray.push(input[i])

        }
    }
    console.log(resultArray.join(' '))
}

arrayDist([7, 8, 9, 7, 2, 3, 4, 1, 2])