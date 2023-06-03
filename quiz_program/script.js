// Quiz questions and choices
const quizData = [
  {
    question: "Which  programming language is mostly used for competative programming?",
    choices: ["java", "c++", "python", "javascript"],
    correctAnswer: 1
  },
  {
    question: "In computer Networks there are how many layers?",
    choices: ["8", "7", "5", "3"],
    correctAnswer: 1
  },
  {
    question: "Among these properties which is incorrect for ACID?",
    choices: ["Atomicity", "deadlock", "Consistency", "Isolation"],
    correctAnswer: 2
  },
  {
    question: "who is most popular actor inthe world?",
    choices: ["Shahrukh khan", "Chris Evans", "RObert junior", "Johny depp"],
    correctAnswer: 0
  }


];


const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;

  choicesElement.innerHTML = "";

  currentQuizData.choices.forEach(function (choice, index) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="radio" name="choice" value="${index}">
      <label>${choice}</label>
    `;
    choicesElement.appendChild(li);
  });
}

function checkAnswer() {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');

  if (selectedChoice) {
    const selectedAnswer = parseInt(selectedChoice.value);

    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
}

function showResult() {
  quizContainer.innerHTML =  `
    <h2>Your Score: ${score}/${quizData.length}</h2>
    <button onclick="location.reload()">Play Again</button>
  `;
}


loadQuestion();
submitButton.addEventListener("click", checkAnswer);
