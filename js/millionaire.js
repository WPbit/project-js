
let qNum = '';
let answerSelected = false;
let winSumFix = 0;
let timer = document.querySelector('#countTime');
let info = document.querySelector('#infoBlock');
let Q = document.querySelector('#question');
let A = document.querySelector('#answerA');
let B = document.querySelector('#answerB');
let C = document.querySelector('#answerC');
let D = document.querySelector('#answerD');

// Фоновая музыка и звуки
let audioAnswerCorrect = new Audio();
audioAnswerCorrect.src = 'sound/answer-correct.mp3';
let audioAnswerWrong = new Audio();
audioAnswerWrong.src = 'sound/answer-wrong.mp3';
let audioNextQuestion = new Audio();
audioNextQuestion.src = 'sound/next-q.mp3';

// Вопросы и Ответы для викторины
let questions = {
    '1': 'Как называют водителя, совершающего поездки на большие расстояния?',
    '2': 'Какой эффект, как говорят, производит покупка дорогой вещи?',
    '3': 'Как зовут поросёнка, героя популярного мультфильма?',
    '4': 'Какими бывают хранилища данных в Интернете?',
    '5': 'Что стало жилищем героев известной песни Битлз?',
    '6': 'Что в прошлом не использовалось для письма?',
    '7': 'Чем паук-серебрянка наполняет своё подводное гнездо?',
    '8': 'Во что жидкость обычно не наливают?',
    '9': 'Что умел делать плащ доктора Стрэнджа - героя кино и комиксов?',
    '10': 'Какая из этих стихотворных форм наименьшая по количеству строк?',
    '11': 'Кто не изображён на гербе Исландии?',
    '12': 'Где покоится прах американского астронома Юджина Шумейкера?',
    '13': 'Какую должность при дворе царицы Тамары занимал Шота Руставели?',
    '14': 'Как называется животное из семейства крыланов?',
    '15': 'Где установлена скульптура, которую до войны считали богиней мира Эйреной, а после войны – богиней победы Викторией?',
}
let answers = {
    '1': {
        'A': 'стрелок',
        'B': 'бомбардир',
        'C': 'дальнобойщик',
        'D': 'снайпер',
    },
    '2': {
        'A': 'щёлкает по барсетке',
        'B': 'бьёт по карману',
        'C': 'стреляет по кошельку',
        'D': 'шлёпает по кредитке',
    },
    '3': {
        'A': 'Франтик',
        'B': 'Финтик',
        'C': 'Фантик',
        'D': 'Фунтик',
    },
    '4': {
        'A': 'облачными',
        'B': 'тучными',
        'C': 'дождевыми',
        'D': 'радужными',
    },
    '5': {
        'A': 'синий троллейбус',
        'B': 'жёлтая подводная лодка',
        'C': 'зелёный поезд',
        'D': 'последняя электричка',
    },
    '6': {
        'A': 'папирус',
        'B': 'бумазея',
        'C': 'пергамент',
        'D': 'глиняные таблички',
    },
    '7': {
        'A': 'крыльями мух',
        'B': 'водорослями',
        'C': 'пузырьками воздуха',
        'D': 'жемчужинками',
    },
    '8': {
        'A': 'в реторту',
        'B': 'в бурдюк',
        'C': 'в анкерок',
        'D': 'в тубус',
    },
    '9': {
        'A': 'разговаривать',
        'B': 'стрелять',
        'C': 'делать хозяина невидимым',
        'D': 'летать',
    },
    '10': {
        'A': 'танка',
        'B': 'катрен',
        'C': 'сонет',
        'D': 'онегинская строфа',
    },
    '11': {
        'A': 'гриф',
        'B': 'дракон',
        'C': 'бык',
        'D': 'белый медведь',
    },
    '12': {
        'A': 'на Марсе',
        'B': 'на Юпитере',
        'C': 'на Луне',
        'D': 'на Земле',
    },
    '13': {
        'A': 'казначей',
        'B': 'придворный поэт',
        'C': 'главный визирь',
        'D': 'посол',
    },
    '14': {
        'A': 'летучий заяц',
        'B': 'летучий волк',
        'C': 'летучая лисица',
        'D': 'летучий медведь',
    },
    '15': {
        'A': 'на портике Лувра',
        'B': 'на холме Палатин в Риме',
        'C': 'на Бранденбургских воротах',
        'D': 'перед Букингемским дворцом',
    },

}
let correctAnswer = {
    '1': 'C',
    '2': 'B',
    '3': 'D',
    '4': 'A',
    '5': 'B',
    '6': 'B',
    '7': 'C',
    '8': 'D',
    '9': 'D',
    '10': 'B',
    '11': 'D',
    '12': 'C',
    '13': 'A',
    '14': 'C',
    '15': 'C',
}

// В начале игры мы прверяем переменную с номером вопроса, если она пустая,
// то игра начинается сначала с первого вопроса
if (qNum == '') {
    qNum = 1;
    createQuestion(qNum);
}

// Вызов таймера ex: startTimer(30);
function startTimer(num)
{
    if (num >= 0) {
        timer.textContent = num;
        setTimeout(() => startTimer(num - 1), 1000);
    } else {
        return num;
    }
}

// Отмечаем сумму выигрыша и несгораемую сумму
function winSum(qNum)
{
    switch (qNum) {
        case 2:
            document.querySelector('#sum1').className = 'badge badge-pill badge-warning';
            break;
        case 3:
            document.querySelector('#sum1').className = 'text-warning';
            document.querySelector('#sum2').className = 'badge badge-pill badge-warning';
            break;
        case 4:
            document.querySelector('#sum2').className = 'text-warning';
            document.querySelector('#sum3').className = 'badge badge-pill badge-warning';
            break;
        case 5:
            document.querySelector('#sum3').className = 'text-warning';
            document.querySelector('#sum4').className = 'badge badge-pill badge-warning';
            break;
        case 6:
            document.querySelector('#sum4').className = 'text-warning';
            document.querySelector('#sum5').className = 'badge badge-pill badge-warning';
            winSumFix = 1000;
            info.textContent = 'Несгораемая сумма: ₴ ' + winSumFix;
            break;
        case 7:
            document.querySelector('#sum5').className = 'text-white';
            document.querySelector('#sum6').className = 'badge badge-pill badge-warning';
            break;
        case 8:
            document.querySelector('#sum6').className = 'text-warning';
            document.querySelector('#sum7').className = 'badge badge-pill badge-warning';
            break;
        case 9:
            document.querySelector('#sum7').className = 'text-warning';
            document.querySelector('#sum8').className = 'badge badge-pill badge-warning';
            break;
        case 10:
            document.querySelector('#sum8').className = 'text-warning';
            document.querySelector('#sum9').className = 'badge badge-pill badge-warning';
            break;
        case 11:
            document.querySelector('#sum9').className = 'text-warning';
            document.querySelector('#sum10').className = 'badge badge-pill badge-warning';
            winSumFix = 32000;
            info.textContent = 'Несгораемая сумма: ₴ ' + winSumFix;
            break;
        case 12:
            document.querySelector('#sum10').className = 'text-white';
            document.querySelector('#sum11').className = 'badge badge-pill badge-warning';
            break;
        case 13:
            document.querySelector('#sum11').className = 'text-warning';
            document.querySelector('#sum12').className = 'badge badge-pill badge-warning';
            break;
        case 14:
            document.querySelector('#sum12').className = 'text-warning';
            document.querySelector('#sum13').className = 'badge badge-pill badge-warning';
            break;
        case 15:
            document.querySelector('#sum13').className = 'text-warning';
            document.querySelector('#sum14').className = 'badge badge-pill badge-warning';
            break;
        case 16:
            document.querySelector('#sum14').className = 'text-warning';
            document.querySelector('#sum15').className = 'badge badge-pill badge-warning';
            winSumFix = 1000000;
            info.textContent =  'Вы ПОБЕДИТЕЛЬ!!! ₴ ' + winSumFix;
            break;
    }
}

// Показываем для каждого раунда вопрос и ответы
function createQuestion(num)
{
    qNum = num;
    answerSelected = false;
    audioNextQuestion.play();

    if (qNum > 1) {
        timer.textContent = '';
        info.textContent = '';
        A.textContent = '';
        B.textContent = '';
        C.textContent = '';
        D.textContent = '';
        document.querySelector('#blockA').style.backgroundColor = '';
        document.querySelector('#blockB').style.backgroundColor = '';
        document.querySelector('#blockC').style.backgroundColor = '';
        document.querySelector('#blockD').style.backgroundColor = '';
    }

    Q.textContent = qNum + '. ' + questions[qNum];
    setTimeout(() => A.textContent = answers[qNum]['A'], 1000);
    setTimeout(() => B.textContent = answers[qNum]['B'], 3000);
    setTimeout(() => C.textContent = answers[qNum]['C'], 5000);
    setTimeout(() => D.textContent = answers[qNum]['D'], 7000);
}

// Выделяем ответ
function selectAnswer(answer)
{
    if (answerSelected === false) {
        switch (answer) {
            case 'A':
                document.querySelector('#blockA').style.backgroundColor = 'darkorange';
                setTimeout(() => checkAnswer('A', qNum), 3000);
                answerSelected = true;
                break;
            case 'B':
                document.querySelector('#blockB').style.backgroundColor = 'darkorange';
                setTimeout(() => checkAnswer('B', qNum), 3000);
                answerSelected = true;
                break;
            case 'C':
                document.querySelector('#blockC').style.backgroundColor = 'darkorange';
                setTimeout(() => checkAnswer('C', qNum), 3000);
                answerSelected = true;
                break;
            case 'D':
                document.querySelector('#blockD').style.backgroundColor = 'darkorange';
                setTimeout(() => checkAnswer('D', qNum), 3000);
                answerSelected = true;
                break;
        }
    }
}

// Проверяем и отмечаем правильный ответ
function checkAnswer(answer, qNum)
{
    if (correctAnswer[qNum] === answer) {

        audioAnswerCorrect.play();
        ++qNum;

        // Отмечаем выигрыш
        setTimeout(() => winSum(qNum), 3000);

        switch (answer) {
            case 'A':
                setTimeout(() => document.querySelector('#blockA').style.backgroundColor = 'darkgreen', 1000);
                break;
            case 'B':
                setTimeout(() => document.querySelector('#blockB').style.backgroundColor = 'darkgreen', 1000);
                break;
            case 'C':
                setTimeout(() => document.querySelector('#blockC').style.backgroundColor = 'darkgreen', 1000);
                break;
            case 'D':
                setTimeout(() => document.querySelector('#blockD').style.backgroundColor = 'darkgreen', 1000);
                break;
        }

        if (qNum <= 15) {
            setTimeout(() => createQuestion(qNum), 4000);
        }

    } else {

        audioAnswerWrong.play();

        if (winSumFix > 0) {
            setTimeout(() => info.textContent = `Ваш выигрыш: ₴ ${winSumFix}`, 2000);
        } else {
            setTimeout(() => info.textContent = 'Вы проиграли.', 2000);
        }

        switch (correctAnswer[qNum]) {
            case 'A':
                setTimeout(() => document.querySelector('#blockA').style.backgroundColor = 'darkgreen', 1000);
                break;
            case 'B':
                setTimeout(() => document.querySelector('#blockB').style.backgroundColor = 'darkgreen', 1000);
                break;
            case 'C':
                setTimeout(() => document.querySelector('#blockC').style.backgroundColor = 'darkgreen', 1000);
                break;
            case 'D':
                setTimeout(() => document.querySelector('#blockD').style.backgroundColor = 'darkgreen', 1000);
                break;
        }
    }
}

function help5050()
{
    let count = 0;
    let tmpNum = 0;
    let min = 1;
    let max = 4;
    let randNum = 0;
    let result = 0;
    let answers = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
    };
    while (true) {
        randNum = Math.round(Math.random() * max);
        result = randNum > min ? randNum : randNum + min;
        if (answers[result] !== correctAnswer[qNum] && result !== tmpNum) {
            switch (result) {
                case 1:
                    A.textContent = '';
                    tmpNum = result;
                    count++;
                    break;
                case 2:
                    B.textContent = '';
                    tmpNum = result;
                    count++;
                    break;
                case 3:
                    C.textContent = '';
                    tmpNum = result;
                    count++;
                    break;
                case 4:
                    D.textContent = '';
                    tmpNum = result;
                    count++;
                    break;
            }
        }
        if (count >= 2) {
            document.querySelector('#help5050').removeAttribute('onclick');
            document.querySelector('#help5050').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg ml-3 mr-3" viewBox="0 0 16 16">\n' +
                '  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>\n' +
                '  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>\n' +
                '</svg>';
            break;
        }
    }
}

function helpCall()
{
    startTimer(30);
    setTimeout(() => info.textContent = 'Подсказка: ' + answers[qNum][correctAnswer[qNum]], 20000);
    document.querySelector('#helpCall').removeAttribute('onclick');
    document.querySelector('#helpCall').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg ml-1 mr-1" viewBox="0 0 16 16">\n' +
        '  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>\n' +
        '  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>\n' +
        '</svg>';
}

function helpAuditory()
{
    startTimer(30);
    setTimeout(() => info.textContent = 'Подсказка: ' + answers[qNum][correctAnswer[qNum]], 30000);
    document.querySelector('#helpAuditory').removeAttribute('onclick');
    document.querySelector('#helpAuditory').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg ml-1 mr-1" viewBox="0 0 16 16">\n' +
        '  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>\n' +
        '  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>\n' +
        '</svg>';
}
