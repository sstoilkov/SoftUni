function solver(input) {
    let result = [];
    let maxNum = 0;
    for (let i = 0; i < input.length; i++) {
        if(maxNum <= input[i]){
            maxNum = input[i];
            result.push(maxNum)
        }
    }
    return result;
}

solver([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24] 
)