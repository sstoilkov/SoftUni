function getArticleGenerator(articles) {
    const arr = articles;
    const resultDiv = document.getElementById('content')

    return () => {
        if(arr.length != 0){
            const artical = document.createElement('article');
            artical.textContent = arr.shift();
            resultDiv.appendChild(artical)
        }
    }

}
