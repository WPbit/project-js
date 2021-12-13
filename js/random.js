function generateRandNum()
{
    let min = +document.querySelector('#inputMin').value;
    let max = +document.querySelector('#inputMax').value;

    console.log(min);
    console.log(max);

    let randNum = Math.round(Math.random() * max);
    let result = randNum < max ? randNum : randNum + min;

    document.querySelector('#result').innerText = result;
}
