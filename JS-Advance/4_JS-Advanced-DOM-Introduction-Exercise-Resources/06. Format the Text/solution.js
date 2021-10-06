function solve() {
  //1.Select elements
  let textAreaElement = document.getElementById('input');

  //2.Extract text from text area
  let text = textAreaElement.value;

  //3. Split text by '.' to get sentances
  let sentases = text.split('.').filter(x => x != '').map(x => x + '.');

  //4. Group sentances by 3 in paragraphs
  //5. Insert paragraphs into DOM
  let resultDiv = document.getElementById('output');

  let paragraphRoof = Math.ceil(sentases.length / 3);
  for (let i = 0; i < paragraphRoof; i++) {
    resultDiv.innerHTML += `<p>${sentases.splice(0, 3).join('')}</p>`
  }
}