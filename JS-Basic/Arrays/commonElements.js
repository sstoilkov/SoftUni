function commonElements(firstList,secondList){
    for(i = 0; i < firstList.length; i++){
        for(j = 0; j < secondList.length; j++){
            if(firstList[i] === secondList[j]){
                console.log(firstList[i])
            } 
        }  
    }
}

commonElements(
    ['Hey', 'hello', 2, 4,'Peter','e'],
    ['Petar',10,'hey',4,'hello', '2']
)