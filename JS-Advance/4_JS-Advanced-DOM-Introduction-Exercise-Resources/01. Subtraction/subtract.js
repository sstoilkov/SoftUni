function subtract() {
    const result = document.getElementById("result");
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);


    result.innerHTML = (firstNumber - secondNumber).toString();
}