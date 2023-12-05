// Questions for quiz game
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
 

   

  



// const for quiz view
const questionTitle = document.getElementById("title");
const questionNumber = document.getElementById("subtitle");
const answerbutton1 = document.getElementById("button1");
const answerbutton2 = document.getElementById("button2");
const answerbutton3 = document.getElementById("button3");
const answerbutton4 = document.getElementById("button4");
const nextQuestion = document.getElementById("NQ");
const scoreElement = document.getElementById("scoreValue");
const scoreDiv = document.getElementById("score");


//Keep track of current question 
let currentQuestion = 0;
//Keep track of score 
let score = 0;

console.log(questions.answers)







//Load next question on screen
function LoadQuestion() {
  const question = questions[currentQuestion];
  const buttons = document.querySelectorAll(".center"); //Find all the question buttons on the screen
  console.log(buttons)
  console.log("DEBUG:"+ question.question)
  questionTitle.innerText = question.question;
  questionNumber.innerText = `Question ${currentQuestion + 1} out of 10`; //Tells the user what question they are on
  const answers = question.answers;
  console.log(answers.answers)
  console.log(answers)
  answerbutton1.innerText = question.answers.a
  let isClicked = false //Only make one button work and allows the user to click on one button
  const scoreinpercentage = (score / 10) * 100; 
 

  console.log(questionTitle)
  //Clear the buttons last response and shows empty when the users click next question 
  buttons.forEach(button => {
    button.innerHTML = '';
    button.classList.remove("answeriscorrect", "answerisincorrect")
    

  })
   
  
   

  

  for(let i = 0; i < answers.length; i++) {
    buttons[i].innerText = question.answers[i].option; //Changes the button text to questions and based on answers provided
        console.log(isClicked)
    buttons[i].onclick = function() {
        //Check if answers is correct or wrong
        if(answers[i].correct) {
              console.log("Correct answer for" + question.currentQuestion)
              if(!isClicked) {
                buttons[i].classList.add("answeriscorrect") //Add css class which changes background to green
                isClicked = true //Updates isClicked
                score++; //Updates score if questions is correct
                scoreElement.innerText = score; //Shows score
                console.log("DEBUG Score has been updated to " + score + " Out of 10")

              }
             
              console.log(isClicked)
              
           
            
              
        } else {
            console.log("Incorrect answer for" + question.currentQuestion)
            if(!isClicked) {
                buttons[i].classList.add("answerisincorrect") //Add css class which changes background to red
                isClicked = true //Updates isClicked
            }
            
            console.log(isClicked)
            
        }
        
    };
  
    

}
 
  
}


//What happens when the user clciks the next question button
nextQuestion.addEventListener("click", function() {
    currentQuestion++; //Updates question count
    console.log("Next question has been clicked")
    //Load questions if there are less then 10 questions reaming
    if(currentQuestion < 10) {
        LoadQuestion();
       
       
        
    } else {
        //Shows score after questions are up
        scoreElement.innerText = score + ` Out of 10`;
        scoreDiv.style.display = "block";
        scoreDiv.style.padding = "20px";
        scoreDiv.style.fontSize = "20px";
    }
});


//Make load question work
LoadQuestion();

