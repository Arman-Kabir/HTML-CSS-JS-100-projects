// Quiz data

const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext1",
            "Hypertext2",
            "Hypertext3",
            "Hypertext4"
        ],
        correct: 0
    },
    {
        question: "Which css property is used to control spacing btn elements?",

        options: ['margin', 'padding', 'spacing', 'border-spacing'],
        correct: 1,

    },
    {
        question: "Which css property is used to control spacing btn elements and all?",

        options: ['margin', 'padding', 'spacing', 'border-spacing'],
        correct: 1,

    }
];

// js initialization
const answerElm = document.querySelectorAll('.answer');
// console.log(answerElm);

const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll('#question', '#option_1', '#option_2', '#option_3', '#option_4');

const submitBtn = document.querySelector('#submit');

const currentQuiz = 0;
const score = 0;

// Load Quiz function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(question);
    console.log(options);

    questionElm.innerText = question;

    // options.forEach((curOption, index) => {
    //     option_1.innerText = curOption;
    // })

    options.forEach((curOption, index) => window[`option_${index + 1}`].innerText = curOption)
}


loadQuiz();