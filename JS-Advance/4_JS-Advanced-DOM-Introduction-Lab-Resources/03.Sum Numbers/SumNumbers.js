function calc() {
    //read value of two fields
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    //sum values
    const sum = num1 + num2;
    // set result
    document.getElementById('sum').value = sum;
}
