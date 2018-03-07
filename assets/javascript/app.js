$(document).ready (function() { 
//results variables

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var count= 10;
var intervalId;
var userAnswer;
//an array with the variables of questions with the answers
var trivia = [
    {
        question: "What year was Beyonce born?",
        answers: {
            a: '1982',
            b: '1981',
            c: '1983',
            d: '1984'
        },
        correctAnswer: 'b'
    },

    {
        question: "What city was Kayne born in?",
        answers: {
            a: 'Chicago',
            b: 'New York',
            c: 'Atlanta',
            d: 'Dallas'
        },
        correctAnswer: 'c'
    },

    {
        question: "How old was Rihanna when signed to Def Jam Records?",
        answers: {
            a: '16',
            b: '17',
            c: '18',
            d: '19'
        },
        correctAnswer: 'a'
    }
];
//start
$("#start-game").on("click", function() {
    $("this").hide();
    timer();
    // displayTrivia();
    
});
//timer
function timer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }
function decrement() {
    count --;
    $("#timer-div").html("Time remaining: "  + count + "secs");
    if (count === 0) {
        stop();
    }
};

function stop(){
    clearInterval(intervalId);
    // results();
};

// function displayTrivia() {

//     for(i=0; i< trivia.length; i++) {
//     $("question-div").html(trivia.question[0]);
//     };

//     for(ans=0; ans < trivia.answers; ans++) {
//    var radioBtn = $("input type ='radio' name ='radio-button' />");
//    radioBtn.appendto("#answers-div");
//    $("#answers-div").append(trivia.answers[0]);
 
// };

// function results(){
//     $("#submit").on("click", function(){
//         $("#results").html("Correct: " + numCorrect);
//         $("#results").append("Incorrect: " + numIncorrect);
//         $("#results").append("Unanswered" + numUnanswered);
//     });
// };
// //score
//     if (userAnswer === correctAnswer){
//         numCorrect++;
//     }
//     else if (userAnswer != correctAnswer) {
//         numIncorrect++;
//     }
//     else {
//         numUnanswered++;
//     }


});