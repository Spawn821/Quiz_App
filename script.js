let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Was bedeutet das HTML Tag &lt;a&gt;?',
        'answer_1': 'Text Fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Kursiv',
        'right_answer': 3
    },
    {
        'question': 'Wie bindet man eine Website in eine Website ein?',
        'answer_1': '&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;',
        'answer_2': '&lt;iframe&gt;',
        'answer_3': '&lt;frame&gt;',
        'answer_4': '&lt;frameset&gt;',
        'right_answer': 2
    },
    {
        'question': 'Wie stellt man Text am BESTEN fett dar?',
        'answer_1': '&lt;strong&gt;',
        'answer_2': 'CSS nutzen',
        'answer_3': '&lt;bold&gt;',
        'answer_4': '&lt;b&gt',
        'right_answer': 1
    },
    {
        'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
        'answer_1': 'readonly',
        'answer_2': 'max',
        'answer_3': 'from',
        'answer_4': 'spellcheck',
        'right_answer': 1
    },
    {
        'question': 'Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?',
        'answer_1': 'a[title]{...}',
        'answer_2': 'a > title {...}',
        'answer_3': 'a.tilte {...}',
        'answer_4': 'a=title {...}',
        'right_answer': 1
    },
    {
        'question': 'Wie definiert man in JavaScript eine Variable?',
        'answer_1': 'let 100 = rate',
        'answer_2': '100 = let rate',
        'answer_3': 'rate = 100',
        'answer_4': 'let rate = 100',
        'right_answer': 4
    }
];

let currentQuestion = 0;

let rightAnswers = 0;

let arrowDisabled = true;

let evaluationAnswers = [];

function init() {
    showCurrentQuestion();
}


function showCurrentQuestion() {

    if (currentQuestion >= questions.length) {
        // Show endscreen
        document.getElementById('questioncard').classList.add('d-none')
        document.getElementById('endscreen').classList.remove('d-none')
        document.getElementById('number-questions-end').innerHTML = questions.length;
        document.getElementById('right-answers').innerHTML = rightAnswers;
    } else {
        // Show current question
        let question = questions[currentQuestion];

        document.getElementById('progress-bar').innerHTML = `${progressBar()}%`;
        document.getElementById('progress-bar').style.width = `${progressBar()}%`;

        document.getElementById('card-Title').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-green-transparent');
        document.getElementById(selection).parentElement.children[0].classList.add('bg-green');
        evaluationAnswers.push({ 'Aufgabe': currentQuestion, 'richtig_falsch': 1 })
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-red-transparent');
        document.getElementById(selection).parentElement.children[0].classList.add('bg-red');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-green-transparent');
        document.getElementById(idOfRightAnswer).parentElement.children[0].classList.add('bg-green');
        evaluationAnswers.push({ 'Aufgabe': currentQuestion, 'richtige_falsch': 0 })
    }

    arrowDisabled = false;
}


function nextQuestion() {
    if (!arrowDisabled) {
        currentQuestion++;
        numberRightAswers();
        resetAnswers();
        showCurrentQuestion();
    } else {
        document.getElementById('text-arrow-disabled').classList.remove('d-none');
    }
}


function numberRightAswers() {
    rightAnswers = 0;
    for (let i = 0; i < evaluationAnswers.length; i++) {
        let answer = evaluationAnswers[i];
        if (answer['richtig_falsch'] == 1) {
            rightAnswers++;
        }
    }
}


function lastQuestion() {

    if (currentQuestion >= 1) {
        currentQuestion--;
        evaluationAnswers.pop();
        resetAnswers();
        showCurrentQuestion();
    }
}


function resetAnswers() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-green-transparent', 'bg-red-transparent');
        document.getElementById(`answer_${i}`).parentNode.children[0].classList.remove('bg-green', 'bg-red');
    }

    document.getElementById('text-arrow-disabled').classList.add('d-none');
    arrowDisabled = true;
}


function progressBar() {
    return Math.round((currentQuestion + 1) / questions.length * 100);
}


function replay() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('questioncard').classList.remove('d-none')
    document.getElementById('endscreen').classList.add('d-none')
    init();
}