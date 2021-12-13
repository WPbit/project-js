function generateRandNum()
{
    let min = +document.querySelector('#inputMin').value;
    let max = +document.querySelector('#inputMax').value;

    if (min > max) {
        let tmp = min;
        min = max;
        max = tmp;
    }

    let randNum = Math.round(Math.random() * max);
    let result = randNum > min ? randNum : randNum + min;

    document.querySelector('#result').innerText = result;
}
