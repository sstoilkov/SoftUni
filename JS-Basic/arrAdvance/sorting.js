function sorting(input){
   
    let result = [];
    let numbersLength = input.length;

    for(i = 0; i < numbersLength; i ++){
        let number;
        if(i % 2 === 0){
            //get biggest
            number = Math.max(...input);
        }else{
            //get smallest
            number = Math.min(...input)
        }
        result.push(number);
        input.splice(input.indexOf(number),1)
        //add to new delete from old
    }
    console.log(result.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])