function generateRandNum()
{
    let min = +document.querySelector('#inputMin').value;
    let max = +document.querySelector('#inputMax').value;

    let randNum = Math.round(Math.random() * max);
    let result = randNum < max ? randNum : randNum + min;

    document.querySelector('#result').innerText = result;
}
