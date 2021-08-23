function magicSum(list,number){
for(let i = 0; i < list.length; i++){
    let currentNumber = list[i];
    for(let j = i; j < list.length; j ++){
        let secondNumber = list[j];
        if((currentNumber+secondNumber)===number){
            if(currentNumber===secondNumber){
                break;
            }
            let result =[currentNumber, secondNumber]
            console.log(result.join(' '))
            }
        }
    }
}

magicSum([1,2,3,4,5,6],
    6)
    