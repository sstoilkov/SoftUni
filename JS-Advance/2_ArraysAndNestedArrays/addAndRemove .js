function solver(input){

    let result = [];
    let intialValue = 1;
    input.forEach(element => {
        if(element ==='add'){
            result.push(intialValue);
        }else if(element ==='remove'){
            result.pop();
        }
        intialValue++;
    });
    if(result[0] === undefined){
        console.log('Empty')
    }else{
        result.forEach(element => {
            console.log(element)
        });
    }
}

solver(['remove', 
'remove', 
'remove']
)