function toObject(obj){
    let jsonAsObj = JSON.parse(obj);
    
    for(let key of Object.keys(jsonAsObj)){
        console.log(`${key}: ${jsonAsObj[key]}`)
    }
}

toObject('{"name": "George", "age": 40, "town": "Sofia"}')