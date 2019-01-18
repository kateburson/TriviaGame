$(document).ready(function() {

    var questions = [{
        questionOne: [{
            question: 'Which volcano is visible from the city on a clear day?',
            answerOne:'Denali',
            answerTwo: 'Mt. St. Helens',
            correctAnswer: 'Mt. Rainier',
        }],
        questionTwo: [{
            question: 'Seattle is within which county?',
            answerOne: 'Everett County',
            answerTwo: 'Seattle County',
            correctAnswer: 'King County'
        }],
        questionThree: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],
        questionFour: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],
        questionFive: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],
        questionSix: [{
            question: 'What two mountain ranges are visible from Seattle?',
            answerOne: 'Coastal Range & Trinity Alps',
            answerTwo: 'The Rockies & The Sierra Nevadas',
            correctAnswer: 'Olympic Mountains & Cascade Range'
        }],
        questionSeven: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],
        questionEight: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],
        questionNine: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],
        questionTen: [{
            question: '',
            answerOne: '',
            answerTwo: '',
            correctAnswer: ''
        }],


    }]; //end questions

    var shuffledQuestions = [];

    var currentQuestion = [];
    var currentAnswers = [];
    var currentCorrect = '';

    var correct = 0;
    var incorrect = 0;
    var started = false;

    function check() {
        $('input:radio').attr(checked, true);
    };

    $('#answers').on('click', function(){
        check();
    });
    
    function uncheck() {
        $('input:radio').attr(checked, false);
    };

    $('#answers').on('click', function(){
        uncheck();
    });

    function shuffleQuestions() {
        for (var i = questions.length-1; i >=0; i--) {
    
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = questions[randomIndex]; 
            
            questions[randomIndex] = questions[i]; 
            questions[i] = itemAtIndex;
            shuffledQuestions.push(itemAtIndex);
            console.log(shuffledQuestions);
        }
    };

    function shuffleAnswers() {
        for (var i = currentAnswers.length-1; i >=0; i--) {
    
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = currentAnswers[randomIndex]; 
            
            currentAnswers[randomIndex] = currentAnswers[i]; 
            questions[i] = itemAtIndex;
            currentAnswers.push(itemAtIndex);
            console.log(currentAnswers);
            $('#answers').append('<li><input type="radio">' + itemAtIndex + '</input></li>');
        }   
    };

    function trivia() {
        started = true;
        shuffleQuestions();
        console.log(shuffledQuestions);
        for(var i = 0; i < shuffledQuestions.length; i++) {
            currentQuestion.push(shuffledQuestions[i]);
            $('#question').text(currentQuestion);
            currentAnswers.push(questions.question[i].answerOne);
            currentAnswers.push(question.question[i].answerTwo);
            currentAnswers.push(question.question[i].correctAnswer);
            currentCorrect = question.question[i].correctAnswer;
            shuffleAnswers();
            var userGuess = input.checked;
            if(userGuess === currentCorrect) {
                correct++;
                $('#message').text('Correct!')
                // go to next question with timer
            }
            else {
                incorrect++;
                $('#message').text('Incorrect :(' + 'Correct Answer: ' + correctAnswer);
                // go to next question with timer
                // 
            } 
            
        }

    };


    // $('#start-newgame').on('click', function() {
    //     trivia();
    // });

    shuffleAnswers();

});


