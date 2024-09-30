function calculateResult() {
    const firstNumberInput = document.getElementById('first-number');
    const secondNumberInput = document.getElementById('second-number');
    const operationInput = document.getElementById('operation');
    const resultElement = document.getElementById('result-text');

    const firstNumber = Number(firstNumberInput.value) || 0;
    const secondNumber = Number(secondNumberInput.value) || 0;
    const operation = operationInput.value.trim();
    let result;

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    resultElement.textContent = result;
}
