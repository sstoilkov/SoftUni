function solve() {

  let input = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  let result = '';
  if (type === 'Camel Case' || type === 'Pascal Case') {
    let newCaseWord = input.split(' ');
    if (type === 'Camel Case') {
      result = (newCaseWord[0]).toLowerCase();
    } else {
      result = newCaseWord[0][0].toUpperCase() + (newCaseWord[0].slice(1, newCaseWord[0].length)).toLowerCase();
    }
    for (let i = 1; i < newCaseWord.length; i++) {
      let text = newCaseWord[i][0].toUpperCase() + (newCaseWord[i].slice(1, newCaseWord[i].length)).toLowerCase();
      result += text;
    }
  } else {
    result = 'Error!'
  }
  document.getElementById('result').textContent = result;
}

