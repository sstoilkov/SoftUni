function addItem() {
    //select input field and read value
    const input = document.getElementById('newItemText');
    console.log(input);
    //create new <li> element and set its contect to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    //select <ul> and append new li
    document.getElementById('items').appendChild(liElement)
    //nice to have : clear input field
    input.value = ''
}