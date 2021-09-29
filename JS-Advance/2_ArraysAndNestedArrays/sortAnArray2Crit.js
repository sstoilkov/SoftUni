function solver(input) {

    let sortedArray = input.sort((a, b) => {
        return a.length - b.length ||
        a.localeCompare(b)
    })
    console.log(sortedArray.join('\n'));
}

solver(['test', 
'Deny', 
'omen', 
'Default']

)