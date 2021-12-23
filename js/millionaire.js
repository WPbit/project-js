
let qNum = '';
let Q = document.querySelector('#question');
let questions = {
    'C': 'Как называют водителя, совершающего поездки на большие расстояния?',
}

// В начале игры мы прверяем переменную с номером вопроса, если она пустая,
// то игра начинается сначала с первого вопроса
if (qNum === '') {
    qNum = 1;
    createQuestion(qNum);
} else {
    ++qNum;
    createQuestion(qNum);
}

function createQuestion(qNum)
{
    Q.textContent = 'Как называют водителя, совершающего поездки на большие расстояния?';
}

function help5050()
{

}

function helpCall()
{

}

function helpAuditory()
{

}
