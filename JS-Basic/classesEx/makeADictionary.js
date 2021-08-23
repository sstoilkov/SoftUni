function makeADictionary(list) {
    let dictionary = [];
    for (let element of list) {
        let obj = JSON.parse(element);
        let dictionaryObject = {
            term: Object.keys(obj)[0],
            definition: Object.values(obj)[0]
        }
        let indexOfTerm = dictionary.findIndex(x => x.term === dictionaryObject.term);
        if (indexOfTerm === -1) {
            dictionary.push(dictionaryObject)
        } else {
            dictionary[indexOfTerm].definition = dictionaryObject.definition;
        }
    }
    let sortedDictionary = dictionary.sort((a,b) => a.term.localeCompare(b.term))
    for( l of sortedDictionary){
        console.log(`Term: ${l.term} => Definition: ${l.definition}`) 
    }
}
makeADictionary([
    '{"Coffee":"sdadsaxzasdadsaddadsadsad."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ,'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}']
      
);