const questions = [
    {
        question: "What is poverty?",
        options: ["The state where a person/persons lacks the usual or socially accepted amount of money or material possessions.", "long-term shifts in temperatures and weather patterns.", "dishonest or fraudulent conduct by those in power.", "An abnormal bodily condition of a living plant or animal that interferes with functioning and can usually be recognized by signs and symptoms."],
        correctAnswer: 0
    },
    {
        question: "What is our mission?",
        options: ["Raise awareness on climate change.", "Raise awareness on poverty.", "Raise awareness on corruption.", "Raise awareness on diseases."],
        correctAnswer: 1
    },
    {
        question: "What is our vision?",
        options: ["A world where everyone is informed of the state of the world relating to corruption.", "A world where everyone is informed of the state of the world relating to diseases.", "Our vision is a world where everyone is informed of the state of the world relating to poverty.", "Our vision is a world where everyone is informed of the state of the world relating to climate change."],
        correctAnswer: 2
    },
    {
	question: "As of 2024, how many people live in extreme poverty?",
        options: ["Approximately 600 million people.", "Approximately 900 million people.", "Approximately 800 million people.", "Approximately 700 million people."],
        correctAnswer: 3
    },
    {
	question: "In relation to the last question, what percentage of the world's population is in extreme poverty?",
        options: ["9.2%", "100%", "1%", "50%"],
        correctAnswer: 0
    }
];

var currentQuestionIndex = 0;
var selectedAnswers = [];

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerHTML = question.question;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
        const i = document.createElement('i');
        i.innerHTML = `
            <input type="radio" name="option" value="${index}" id="option-${index}" 
            ${selectedAnswers[currentQuestionIndex] === index ? 'checked' : ''} onclick="selectAnswer(${index})">
            <label for="option-${index}">${option}</label>
        `;
        optionsList.appendChild(i);
    });

    document.getElementById('previous-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === questions.length - 1;
    document.getElementById('submit-btn').disabled = selectedAnswers.length !== questions.length;
}

function changeQuestion(direction) {
    currentQuestionIndex += direction;
    loadQuestion();
}

function selectAnswer(answerIndex) {
    selectedAnswers[currentQuestionIndex] = answerIndex;
    document.getElementById('submit-btn').disabled = selectedAnswers.length !== questions.length;
}

function checkAnswers() {
    let correctAnswersCount = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            correctAnswersCount++;
        }
    });
    return correctAnswersCount;
}

function submitQuiz() {
    const correctAnswersCount = checkAnswers();
    alert(`Your score is: ${correctAnswersCount} out of ${questions.length}`);
}