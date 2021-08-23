function charactersInRange(firstChar, secondChar){
    let min = firstChar.charCodeAt(0);
    let max = secondChar.charCodeAt(0);
    let firstCharAsNum = firstChar.charCodeAt(0);
    let secondCharAsNum = secondChar.charCodeAt(0);
    if(firstCharAsNum > secondCharAsNum){
        max = firstCharAsNum;
        min = secondCharAsNum;
    }
    let result = '';
    for(let i = min + 1; i < max; i++){
        let character = String.fromCharCode(i);
        result+= character + ' ';
    }
    return result;
    console.log(result)
}

charactersInRange('a',
'd'
)