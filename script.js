const questions  = {
    0:{
        question: "Which programming language is primarily used in conjunction with SwiftUI for iOS app development?",
        answers:{
            a:{option: "Java", correct: false},
            b:{option: "JavaScript", correct: false},
            c: {option: "SwiftUI ", correct: true},
            d: {option: "C++", correct: false}
        } 
    },

    1: {
        question: "Which SwiftUI view is used to create a button in an iOS app?", 
        answers:{
            a:{option: "Button", correct: true},
            b:{option: "Text", correct: false},
            c: {option: "Bold", correct: false},
            d: {option: "VStack", correct: false}
        }
    },

    2: {
        question:  "How is a list created in SwiftUI?",
        answers: {
            a:{option: "Button", correct: false},
            b:{option: "List", correct: true},
            c: {option: "Color", correct: false},
            d: {option: "HStack", correct: false}
        }
    },


    3: {
        question: "How do you display text in a SwiftUI view?", 
        answers: {
              a:{option: "TextView", correct: false},
              b:{option: "Bold", correct: false},
              c: {option: "Text", correct: true},
              d: {option: "VStack", correct: false}
        }

    },

    4: {
        question: "How can you change the color of text in a SwiftUI Text view?",
        answers: {
                a:{option: "Color", correct: false},
                b:{option: "Foreground Color", correct: true},
                c: {option: "ColorView", correct: false},
                d: {option: "Hex", correct: false}
        }
    }, 

    5: {
        question: "What SwiftUI modifier can be used to make text bold in a Text view?",
        answers: {
             a:{option: "Fontsize", correct: false},
             b:{option: "Fontweight", correct: false},
             c: {option: "Bold", correct: true},
             d: {option: "italic", correct: false}
           }
    }, 

    6: {
        question: "Which layout container in SwiftUI arranges views in a vertical stack?",
        answers: {
            a:{option: "Vstack", correct: true},
            b:{option: "Hstack", correct: false},
            c: {option: "LazyVGrid", correct: false},
            d: {option: "Foreach", correct: false}
        }
    }, 

    7: {

        question: "Which layout container in SwiftUI arranges views in a horizontal stack?",
        answers: {
            a:{option: "Vstack", correct: false},
            b:{option: "Hstack", correct: true},
            c: {option: "Lstack", correct: false},
            d: {option: "Print", correct: false}
        }
    }, 

    8: {
        question: "What year was SwiftUI first relazsed to the public?", 
        answers: {
             a:{option: "2018", correct: false},
             b:{option: "2017", correct: false},
             c: {option: "2019", correct: true},
             d: {option: "2020", correct: false}
        }
    }, 

    9: {
        question: "What IDE do you use to code with?", 
        answers: {
                a:{option: "Viusal Studio Code", correct: false},
                b:{option: "Repliet", correct: false},
                c: {option: "TextEditor", correct: false},
                d: {option: "Xcode", correct: true}
       }
    }, 


}
 

   

  




const questionTitle = document.getElementById("title");
const questionNumber = document.getElementById("subtitle");
const answerbutton1 = document.getElementById("button1");
const answerbutton2 = document.getElementById("button2");
const answerbutton3 = document.getElementById("button3");
const answerbutton4 = document.getElementById("button4");
const nextQuestion = document.getElementById("NQ");


let currentQuestion = 0;

console.log(questions.answers)

function LoadQuestion() {
  const question = questions[currentQuestion];
  const options = question[currentQuestion];
  console.log(options)
  const buttons = document.querySelectorAll(".center");
  console.log("DEBUG:"+ question.question)
  questionTitle.innerText = question.question;
  questionNumber.innerText = `Question ${currentQuestion + 1}`;
  answerbutton1.innerText = options.currentQuestion.a
//   console.log(questionNumber)
  console.log(questionTitle)

  for(let i = 0; i < answerbutton1.length; i++) {
    answerbutton1[i].textContent = question.answers[i].option;
    answerbutton1[i].onclick = function() {

    };
  }

}

nextQuestion.addEventListener("click", function() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        LoadQuestion();
        questionTitle.innerText = question.question;
    } else {

    }
});

LoadQuestion();
