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
        'question': 'Für was steht das Kürzel HTML?',
        'answer_1': 'Hyper to Minimal Language',
        'answer_2': 'Host the Mail Lines',
        'answer_3': 'Help Text Markup Language',
        'answer_4': 'Hyper Text Markup Language',
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
        'question': 'Welche Einheit ist 1=16px groß?',
        'answer_1': 'rem',
        'answer_2': 'cm',
        'answer_3': 'vw',
        'answer_4': 'px',
        'right_answer': 1
    },
    {
        'question': 'Was ist eine generische Klasse?',
        'answer_1': 'Die Farben ändert',
        'answer_2': 'Nur in HTML-Tags steht',
        'answer_3': 'Eine feste Größe hat',
        'answer_4': 'Oft verwendet werden kann',
        'right_answer': 4
    },
    {
        'question': 'Welches der Folgenden ist eine id?',
        'answer_1': '.headline',
        'answer_2': 'div',
        'answer_3': '&text-section',
        'answer_4': '#result',
        'right_answer': 4
    }
];

let questionsJS = [
    {
        'question': 'Wie alt ist JavaScript?',
        'answer_1': '30 Jahre',
        'answer_2': '31 Jahre',
        'answer_3': '28 Jahre',
        'answer_4': '44 Jahre',
        'right_answer': 3
    },
    {
        'question': 'Was ist die richtige Schreibweise?',
        'answer_1': 'function result {}',
        'answer_2': 'rectangle() =>',
        'answer_3': 'function addList{} ()',
        'answer_4': 'funciton changeColor() {}',
        'right_answer': 4
    },
    {
        'question': 'Wie ändert man die Dezimalstellen?',
        'answer_1': 'result.toFixed(2)',
        'answer_2': 'Math.round(result)',
        'answer_3': 'Math.toDecimal(result)',
        'answer_4': 'result.round(3)',
        'right_answer': 1
    },
    {
        'question': 'Wie ändere ich die Klasse eines HTML-Tags?',
        'answer_1': 'classList.addRemove(color)',
        'answer_2': '.classList.remove(\'bg-black\')',
        'answer_3': '.innerHTML = \'nav-bar\'',
        'answer_4': '.src = \'.\/img\/img1.jpg\'',
        'right_answer': 2
    },
    {
        'question': 'Wer hat JS erfunden?',
        'answer_1': 'Netscape',
        'answer_2': 'Sun Microsystems',
        'answer_3': 'Bosch',
        'answer_4': 'Tim Berners-Lee',
        'right_answer': 1
    },
    {
        'question': 'Wie definiert man in JS eine Variable?',
        'answer_1': 'let 100 = rate',
        'answer_2': '100 = let rate',
        'answer_3': 'rate = 100',
        'answer_4': 'let rate = 100',
        'right_answer': 4
    },
    {
        'question': 'Wie greift man auf ein JSON-Array zu?',
        'answer_1': 'array[j]',
        'answer_2': 'array[i][key]',
        'answer_3': 'array[i][value]',
        'answer_4': 'array.JSON[key]',
        'right_answer': 2
    }
];

let questionsJava = [
    {
        'question': 'Wo nach ist Java benannt?',
        'answer_1': 'Nach einem Fluss',
        'answer_2': 'Nach einer Stadt',
        'answer_3': 'Nach einer Kaffeesorte',
        'answer_4': 'Nach einer Insel',
        'right_answer': 4
    },
    {
        'question': 'Wem gehört Java heute?',
        'answer_1': 'Sun Microsystems',
        'answer_2': 'Oracle',
        'answer_3': 'Microsoft',
        'answer_4': 'Apple',
        'right_answer': 1
    },
    {
        'question': 'Welcher Datentyp hat 16 Bit?',
        'answer_1': 'long',
        'answer_2': 'byte',
        'answer_3': 'short',
        'answer_4': 'float',
        'right_answer': 3
    },
    {
        'question': 'Was ist Java für eine Art von Sprache?',
        'answer_1': 'objektorientiert',
        'answer_2': 'funktional',
        'answer_3': 'script',
        'answer_4': 'CNC',
        'right_answer': 1
    },
    {
        'question': 'Was ist so besonders an Java?',
        'answer_1': 'Sie ist am schnellsten',
        'answer_2': 'Sie ist systemunabhängig',
        'answer_3': 'Sie ist am einfachsten',
        'answer_4': 'Sie ist am jüngsten',
        'right_answer': 2
    },
    {
        'question': 'Wie definiert man in Java eine Variable?',
        'answer_1': 'let 100 = rate',
        'answer_2': 'number byte = 40',
        'answer_3': 'rate = 100',
        'answer_4': 'float number = 77.321',
        'right_answer': 4
    },
    {
        'question': 'Wie definiert man in Java ein zweidimensionales Array?',
        'answer_1': 'array[]',
        'answer_2': 'array = [][]',
        'answer_3': 'array[][]',
        'answer_4': 'array[[]]',
        'right_answer': 3
    }
];

let questions = [];


function loadQuestions(list) {
    questions = [];
    for (let i = 0; i < list.length; i++) {
        questions.push(list[i]);
    }

    document.getElementById('welcomeimage').classList.add('d-none')

    replay();
}