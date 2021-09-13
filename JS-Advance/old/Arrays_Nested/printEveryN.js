function solver(input, element){

    let result = [];
    for(let i = 0; i < input.length; i++){
        if(i % element === 0){
            result.push(input[i])
        }
    }
    return result;
}

solver(['dsa',
'asd', 
'test', 
'tset'], 
2
)