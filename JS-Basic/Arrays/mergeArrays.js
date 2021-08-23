function mergeArrays(firstList,secondList){
    thirdList = [];
    for(let i = 0; i < firstList.length; i++){
        let result = 0;
        //even
        if(i % 2 === 0){
           result = Number(firstList[i])+Number(secondList[i]);
        }else{
            result = firstList[i] + secondList[i];
        }
        thirdList.push(result);
    }
    console.log(thirdList.join(' - '));
}
   

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);