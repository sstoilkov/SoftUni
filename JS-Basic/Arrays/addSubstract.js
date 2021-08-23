function addSubstract(list){
    let oldListSum = 0;
    let newListSum = 0;
    for(let i = 0; i <list.length; i++ ){
        oldListSum+=Number(list[i]);
    }
    for(let i = 0; i <list.length; i++){
        if(list[i] % 2 === 0){
            list[i] = Number(list[i]) + i;
        }
        else{
            list[i] = Number(list[i] - i)
        }
    }
    for(let i = 0; i < list.length; i++){
        newListSum+=Number(list[i]);
    }
    console.log(list);
    console.log(oldListSum);
    console.log(newListSum);
}
