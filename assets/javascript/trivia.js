var questions = [];
var answers = [];

var shuffledQuestions = [];

var currentQuestion = [];
var currentAnswers = [];
var currentCorrect = '';

var correct = 0;
var incorrect = 0;
var started = false;

function check() {
    document.getElementsByClassName(".answers").checked = true;
  }
  
  function uncheck() {
    document.getElementsByClassName(".answers").checked = false;
  }

function shuffleQuestions() {
    for (var i = questions.length-1; i >=0; i--) {
 
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = questions[randomIndex]; 
         
        questions[randomIndex] = programs[i]; 
        questions[i] = itemAtIndex;
        console.log(itemAtIndex);
        shuffledQuestions.push(itemAtIndex);
    }
};

function shuffleAnswers() {
    for (var i = currentAnswers.length-1; i >=0; i--) {
 
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = currentAnswers[randomIndex]; 
         
        currentAnswers[randomIndex] = programs[i]; 
        questions[i] = itemAtIndex;
        console.log(itemAtIndex);
        currentAnswers.push(itemAtIndex);
        $('#answers').append('<li>' + itemAtIndex + '</li>');
}

function trivia() {
    shuffleQuestions();
    for(var i = 0; i < shuffledQuestions.length; i++) {
        currentQuestion.push(shuffledQuestions[i]);
        $('#question').text(currentQuestion);
        currentAnswers.push(answers[i]);
        currentAnswers.push(answers[i+1]);
        currentAnswers.push(answers[i+2]);
        currentCorrect = answers[i];
        shuffleAnswers();
        var userGuess = answers.checked;
        if(userGuess === currentCorrect) {
            correct++;
            // display correct answer message
            $('#message').text('Correct!')
            // go to next question with timer
        }
        else {
            incorrect++;
            // display incorrect answer message
            $('#message').text('Incorrect :(')
            // go to next question with timer
            // 
        } 
        
    }


};

$('#start-newgame').on('click', function(){
    started = true;
    trivia();
});