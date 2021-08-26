function solver(input) {

    let occurences = new Map();
    let inputAsArray = input
        .toLowerCase()
        .split(' ')

    inputAsArray.forEach(word => {
        if (occurences.has(word)) {
            occurences.set(word, occurences.get(word) + 1);
        } else {
            occurences.set(word, 1);
        }
    });

    console.log(Array.from(occurences.keys())
    .filter( x => occurences.get(x) % 2 !== 0)
    .join(' '));
}


solver('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')