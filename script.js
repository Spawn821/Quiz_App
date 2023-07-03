let currentQuestion = 0;

let rightAnswers = 0;

let arrowDisabled = true;

let evaluationAnswers = [];

let audioSuccess = new Audio('./sound/success.wav');

let audioWrong = new Audio('./sound/wrong.wav');

function init() {
    document.getElementById('welcomeimage').classList.remove('d-none');
}


function showCurrentQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length
}


function showEndscreen() {
    document.getElementById('questioncard').classList.add('d-none')
    document.getElementById('endscreen').classList.remove('d-none')
    document.getElementById('number-questions-end').innerHTML = questions.length;
    document.getElementById('right-answers').innerHTML = rightAnswers;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('card-Title').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(question, selectedQuestionNumber)) {
        answerSuccess(selection);
    } else {
        answerWrong(selection, idOfRightAnswer);
    }

    arrowDisabled = false;
}


function rightAnswerSelected(question, selectedQuestionNumber) {
    return selectedQuestionNumber == question['right_answer']
}


function answerSuccess(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-green-transparent');
    document.getElementById(selection).parentElement.children[0].classList.add('bg-green');
    evaluationAnswers.push({ 'Aufgabe': currentQuestion, 'richtig_falsch': 1 })
    audioSuccess.play();
}


function answerWrong(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-red-transparent');
    document.getElementById(selection).parentElement.children[0].classList.add('bg-red');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-green-transparent');
    document.getElementById(idOfRightAnswer).parentElement.children[0].classList.add('bg-green');
    evaluationAnswers.push({ 'Aufgabe': currentQuestion, 'richtige_falsch': 0 })
    audioWrong.play();
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


function updateProgressBar() {
    let progress = Math.round((currentQuestion + 1) / questions.length * 100);
    document.getElementById('progress-bar').innerHTML = `${progress}%`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}


function replay() {
    currentQuestion = 0;
    rightAnswers = 0;
    evaluationAnswers = [];
    document.getElementById('questioncard').classList.remove('d-none')
    document.getElementById('endscreen').classList.add('d-none')

    showCurrentQuestion();
    resetAnswers();
}