
let inputDisplay = document.querySelector('#inputDisplay');

function allInputs(symbol)
{
    if (inputDisplay.textContent.length == 1 && inputDisplay.textContent == 0) {
        if (!isNaN(+symbol)) {
            inputDisplay.textContent = symbol;
        } else if (symbol == '.') {
            inputDisplay.textContent = 0 + symbol;
        }
    } else {
        if (!isNaN(+inputDisplay.textContent[inputDisplay.textContent.length - 1]) || !isNaN(+symbol)) {
            inputDisplay.append(symbol);
        } else {
            inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
            inputDisplay.append(symbol);
        }
    }
}

function allClear()
{
    inputDisplay.textContent = 0;
}

function calc()
{
    if (!isNaN(+inputDisplay.textContent[inputDisplay.textContent.length - 1])) {
        inputDisplay.textContent = eval(inputDisplay.textContent);
    } else {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
        inputDisplay.textContent = eval(inputDisplay.textContent);
    }
}
