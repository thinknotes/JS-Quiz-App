const questions  = {
    0:{
        question: "Which programming language is primarily used in conjunction with Swift for iOS app development?",
        answers: [
            {option: "Java", correct: false},
            {option: "JavaScript", correct: false},
            {option: "SwiftUI ", correct: true},
            {option: "C++", correct: false}
        ]
        
    },

    1: {
        question: "Which SwiftUI view is used to create a button in an iOS app?", 
        answers: [
            {option: "Button", correct: true},
            {option: "Text", correct: false},
            {option: "Bold", correct: false},
            {option: "VStack", correct: false}
        ]
    },

    2: {
        question:  "How is a list created in SwiftUI?",
        answers: [
            {option: "Button", correct: false},
            {option: "List", correct: true},
            {option: "Color", correct: false},
            {option: "HStack", correct: false}
        ]
    },


    3: {
        question: "How do you display text in a SwiftUI view?", 
        answers: [
              {option: "TextView", correct: false},
              {option: "Bold", correct: false},
              {option: "Text", correct: true},
              {option: "VStack", correct: false}
        ]

    },

    4: {
        question: "How can you change the color of text in a SwiftUI Text view?",
        answers: [
                {option: "Color", correct: false},
                {option: "Foreground Color", correct: true},
                {option: "ColorView", correct: false},
                {option: "Hex", correct: false}
        ]
    }, 

    5: {
        question: "What SwiftUI modifier can be used to make text bold in a Text view?",
        answers: [
             {option: "Fontsize", correct: false},
             {option: "Fontweight", correct: false},
             {option: "Bold", correct: true},
             {option: "italic", correct: false}
        ]
    }, 

    6: {
        question: "Which layout container in SwiftUI arranges views in a vertical stack?",
        answers: [
            {option: "Vstack", correct: true},
            {option: "Hstack", correct: false},
            {option: "LazyVGrid", correct: false},
            {option: "Foreach", correct: false}
        ]
    }, 

    7: {

        question: "Which layout container in SwiftUI arranges views in a horizontal stack?",
        answers: [
            {option: "Vstack", correct: false},
            {option: "Hstack", correct: true},
            {option: "Lstack", correct: false},
            {option: "Print", correct: false}
        ]
    }, 

    8: {
        question: "What year was SwiftUI first relazsed to the public?", 
        answers: [
             {option: "2018", correct: false},
             {option: "2017", correct: false},
             {option: "2019", correct: true},
             {option: "2020", correct: false}
        ]
    }, 

    9: {
        question: "What IDE do you use to code with?", 
        answers: [
                {option: "Viusal Studio Code", correct: false},
                {option: "Repliet", correct: false},
                {option: "TextEditor", correct: false},
                {option: "Xcode", correct: true}
        ]
    }


}
 

   

  




const questionTitle = document.getElementById("title");
const questionNumber = document.getElementById("subtitle");
const answerbutton1 = document.getElementById("button1");
const answerbutton2 = document.getElementById("button2");
const answerbutton3 = document.getElementById("button3");
const answerbutton4 = document.getElementById("button4");
const nextQuestion = document.getElementById("NQ");


let currentQuestion = 0;
let timer;

console.log(questions.answers)

function startTimer() {
    let timeLeft = 60
    time = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer)
            console.log("Time is up for this question")
        } else {
            console.log("Time remaing for this question is", timeLeft)
            timeLeft--;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}


function LoadQuestion() {
  const question = questions[currentQuestion];
  const buttons = document.querySelectorAll(".center");
  console.log(buttons)
  console.log("DEBUG:"+ question.question)
  questionTitle.innerText = question.question;
  questionNumber.innerText = `Question ${currentQuestion + 1} out of 10`;
  const answers = question.answers;
  console.log(answers.answers)
  console.log(answers)
  answerbutton1.innerText = question.answers.a
//   answerbutton1.innerText = options.currentQuestion.a
//   console.log(questionNumber)
  console.log(questionTitle)
  buttons.forEach(button => {
    button.innerHTML = '';
    button.classList.remove("answeriscorrect", "answerisincorrect")
    button.disabled = false;
  })

  for(let i = 0; i < answers.length; i++) {
    buttons[i].innerText = question.answers[i].option;
    buttons[i].onclick = function() {
        buttons.innerText = question.answers
        if(answers[i].correct) {
              console.log("Correct answer for" + question.currentQuestion)
              buttons[i].classList.add("answeriscorrect")
              buttons.classList.remove()
              stopTimer()
              
        } else {
            console.log("Incorrect answer for" + question.currentQuestion)
            buttons[i].classList.add("answerisincorrect")
            buttons.classList.remove()
            stopTimer()
        }
        
    };
  }

  
}

nextQuestion.addEventListener("click", function() {
    currentQuestion++;
    console.log("Next question has been clicked")
    if(currentQuestion < 10) {
        LoadQuestion();
        startTimer();
        // questionTitle.innerText = 
        
    } else {
       stopTimer()
    }
});



LoadQuestion();
startTimer();
