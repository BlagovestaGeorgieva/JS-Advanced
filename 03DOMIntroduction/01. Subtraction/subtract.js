function subtract() {
    
    let firstElement = document.getElementById('firstNumber');
    let firstValue = firstElement.value
    let secondElement = document.getElementById('secondNumber');
    let secondValue = secondElement.value

    let result = document.getElementById('result');
    result.textContent = firstValue - secondValue;

}