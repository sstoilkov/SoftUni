function solver(input){
    let storage = {};

    for(let list of input){
        let tokens = list.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if(storage.hasOwnProperty(product)){
            storage[product] += Number(quantity);
        }else{
            storage[product] = quantity;
        }
    }
    for(let key in storage){
        console.log(`${key} -> ${storage[key]}`)
    }  
}

solver(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)