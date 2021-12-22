
let inputDisplay = document.querySelector('#inputDisplay');
let dot = false;

function allInputs(symbol)
{
    if (inputDisplay.textContent.length == 1 && inputDisplay.textContent == 0) {

        if (!isNaN(+symbol)) {
            inputDisplay.textContent = symbol;
        } else if (symbol == '.') {
            inputDisplay.textContent = 0 + symbol;
            dot = true;
        }

    } else {

        if (!isNaN(+inputDisplay.textContent[inputDisplay.textContent.length - 1]) || !isNaN(+symbol)) {

            (dot === true && symbol === '.') ? '' : inputDisplay.append(symbol);

            (dot === false && symbol === '.') ? dot = true : '';

            switch (inputDisplay.textContent[inputDisplay.textContent.length - 1]) {
                case '+':
                    dot = false;
                    break;
                case '-':
                    dot = false;
                    break;
                case '*':
                    dot = false;
                    break;
                case '/':
                    dot = false;
                    break;
            }

        } else if (symbol !== '.') {

            inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
            inputDisplay.append(symbol);
            dot = false;

        }
    }
}

function allClear()
{
    inputDisplay.textContent = 0;
    dot = false;
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
