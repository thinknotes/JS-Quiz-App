const questions  = {
    question: "Which programming language is primarily used in conjunction with SwiftUI for iOS app development?",
    answers:{
        a:{option: "Java", correct: false},
        b:{option: "JavaScript", correct: false},
        c: {option: "SwiftUI ", correct: true},
        d: {option: "C++", correct: false}
    }, 


    question: "Which SwiftUI view is used to create a button in an iOS app?", 
    answers:{
        a:{option: "Button", correct: true},
        b:{option: "Text", correct: false},
        c: {option: "Bold", correct: false},
        d: {option: "VStack", correct: false}
    }, 

    question:  "How is a list created in SwiftUI?",
    answers: {
        a:{option: "Button", correct: false},
        b:{option: "List", correct: true},
        c: {option: "Color", correct: false},
        d: {option: "HStack", correct: false}
    }, 


    question: "How do you display text in a SwiftUI view?", 
    answers: {
        a:{option: "TextView", correct: false},
        b:{option: "Bold", correct: false},
        c: {option: "Text", correct: true},
        d: {option: "VStack", correct: false}
    }, 


    question: "How can you change the color of text in a SwiftUI Text view?",
    answers: {
        a:{option: "Color", correct: false},
        b:{option: "Foreground Color", correct: true},
        c: {option: "ColorView", correct: false},
        d: {option: "Hex", correct: false}
    }, 


    question: "What SwiftUI modifier can be used to make text bold in a Text view?",
    answers: {
        a:{option: "Fontsize", correct: false},
        b:{option: "Fontweight", correct: false},
        c: {option: "Bold", correct: true},
        d: {option: "italic", correct: false}
    }, 

    question: "Which layout container in SwiftUI arranges views in a vertical stack?",
    answers: {
        a:{option: "Vstack", correct: true},
        b:{option: "Hstack", correct: false},
        c: {option: "LazyVGrid", correct: false},
        d: {option: "Foreach", correct: false}
    }, 
 
    
    question: "Which layout container in SwiftUI arranges views in a horizontal stack?",
    answers: {
        a:{option: "Vstack", correct: false},
        b:{option: "Hstack", correct: true},
        c: {option: "Lstack", correct: false},
        d: {option: "Print", correct: false}
    }, 
 

    question: "What year was SwiftUI first relazsed to the public?", 
    answers: {
        a:{option: "2018", correct: false},
        b:{option: "2017", correct: false},
        c: {option: "2019", correct: true},
        d: {option: "2020", correct: false}
    }, 
 

   question: "What IDE do you use to code with?", 
   answers: {
    a:{option: "Viusal Studio Code", correct: false},
    b:{option: "Repliet", correct: false},
    c: {option: "TextEditor", correct: false},
    d: {option: "Xcode", correct: true}
}, 

  
}



const questionTitle = document.getElementById("title");
const questionNumber = document.getElementById("subtitle");
const answerbutton1 = document.getElementById("button1");
const answerbutton2 = document.getElementById("button2");
const answerbutton3 = document.getElementById("button3");
const answerbutton4 = document.getElementById("button4");
const nextQuestion = document.getElementById("NQ");

console.log(questions.answers.a)