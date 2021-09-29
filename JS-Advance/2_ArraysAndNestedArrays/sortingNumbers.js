function solver(input) {

    let sortedArray = input.sort((a, b) => a - b);
    let resultArray = [];

    while(sortedArray.length){
            let firstElement = sortedArray.shift();
            resultArray.push(firstElement);
            let lastElement = sortedArray.pop();
            resultArray.push(lastElement);
    }
    return resultArray;
}

solver([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])