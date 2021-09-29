function solver(input) {

    let res = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            res[j] = (res[j] || 0) + input[i][j];
        }
    }
    input.forEach(e => {
        let sum = 0;
        e.forEach(x => {
            sum += x;
        });
        res.push(sum);
    });

    function allEqual(arr) {
        return new Set(arr).size == 1;
    }
    if(allEqual(res)){
        return true;
    }else{
       return false;
    }
}

solver([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)