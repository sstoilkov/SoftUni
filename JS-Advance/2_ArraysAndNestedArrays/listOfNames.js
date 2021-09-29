function solver(input) {

    let sortedArray = input.sort(function (a, b){
       return a.localeCompare(b)
    })
    for (let i = 0; i < sortedArray.length; i++) {
        console.log(`${i+1}.${sortedArray[i]}`)
    }
}

solver(["John", "Bob", "Christina", "Ema"])