function equalSums(list){
    let hasFoundResult = false;
    for(let i = 0; i < list.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(j = 0; j < i; j++){
            leftSum+=list[j];
        }
        for(j = i + 1; j < list.length; j++){
            rightSum+=list[j];
        }
        if(leftSum === rightSum){
            console.log(i);
            hasFoundResult = true;
            break;
        }
    }
    if(hasFoundResult === false){
        console.log('no');
    }
}

equalSums([1, 2, 3])