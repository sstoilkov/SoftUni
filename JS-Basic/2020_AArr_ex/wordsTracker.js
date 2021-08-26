function solver(input) {

    let occurances = {};
    input.shift()
        .split(' ')
        .forEach(word => {
            occurances[word] = 0
        });
    input.forEach(w => {
        if (occurances.hasOwnProperty(w)) {
            occurances[w]++;
        }
    })
    let sorted = Object.keys(occurances)
        .sort((a, b) => occurances[b] - occurances[a])
        .map(w => `${w} - ${occurances[w]}`)
        .join('\n')
        console.log(sorted)
}

solver([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)