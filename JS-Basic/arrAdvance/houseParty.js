function houseParty(input) {

    let resultList = [];
    for (i = 0; i < input.length; i++) {

        let person = input[i].split(' ');
        let name = person.shift();
        let isGoing = person.join(' ')

        if(isGoing === 'is going!'){
            if(resultList.includes(name)){
                console.log(`${name} is already in the list!`)
            }
            else{
                resultList.push(name);
            }
        }else{
            if(resultList.includes(name)){
                resultList.splice(resultList.indexOf(name),1)
            }
            else{
                console.log(`${name} is not in the list!`)
            }
        }
    }
    for(i = 0; i < resultList.length; i++){
        console.log(resultList[i])
    }
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)