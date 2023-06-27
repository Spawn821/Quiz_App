let questionsHTML = [
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

let questionsCSS = [
    {
        'question': 'Wann kam die erste Version von CSS?',
        'answer_1': '1996',
        'answer_2': '1994',
        'answer_3': '2002',
        'answer_4': '1985',
        'right_answer': 1
    },
    {
        'question': 'Was heißt CSS ausgeschrieben?',
        'answer_1': 'Collection Style Sheet',
        'answer_2': 'Control Style Sheet',
        'answer_3': 'Cascading Style Sheet',
        'answer_4': 'Castemaising Style Sheet',
        'right_answer': 3
    },
    {
        'question': 'Welche der Klassen sind richtig verkettet?',
        'answer_1': '.headline & .text-section',
        'answer_2': '.vertical-text .horizontal-text',
        'answer_3': '.rectangle || .circle',
        'answer_4': '.headline - .text-section',
        'right_answer': 2
    },
    {
        'question': 'Wie gibt man Icons einen Schatten?',
        'answer_1': 'filter: drop-shadow',
        'answer_2': 'filter: box-shadow',
        'answer_3': 'background-filter:',
        'answer_4': 'background-color:',
        'right_answer': 1
    },
    {
        'question': 'Welche Einheit ist 16px groß?',
        'answer_1': 'rem',
        'answer_2': 'cm',
        'answer_3': 'vw',
        'answer_4': 'px',
        'right_answer': 1
    },
    {
        'question': 'Was ist eine generische Klasse?',
        'answer_1': 'Die Farben ändert',
        'answer_2': 'Die nur in HTML-Tags steht',
        'answer_3': 'Die eine feste Größe hat',
        'answer_4': 'Die oft verwendet werden kann',
        'right_answer': 4
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

let questions = [];


function loadQuestions(list) {
    questions = [];
    for (let i = 0; i < list.length; i++) {
        questions.push(list[i]);
    }

    document.getElementById('welcomeimage').classList.add('d-none')
    document.getElementById('questioncard').classList.remove('d-none')

    showCurrentQuestion();
}