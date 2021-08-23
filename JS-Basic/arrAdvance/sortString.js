function sortString(wordList) {
 
    wordList.sort((a, b)=> {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    });

    console.log(wordList.join('\n'))

}

sortString(["alpha", "beta", "gamma"])