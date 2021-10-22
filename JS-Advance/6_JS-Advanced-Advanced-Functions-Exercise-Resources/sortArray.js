function solve(numbers, order) {

    let result = [];
    if (order === 'asc') {
        result = numbers.sort((a, b) => a - b);
    }else{
        result = numbers.sort((a, b) => b - a);
    }
   return result;
}
solve([14, 7, 17, 6, 8], 'desc')