$(document).ready(function() {

    var trivia = [{
        question: [
            'Which mountain is visible from the city on a clear day?',
            'Denali',
            'Mt. St. Helens',
            'Mt. Rainier'
        ],
        question: [
            'Seattle is within which county?',
            'Everett County',
            'Seattle County',
            'King County'
        ],
        question: [
            'For which event was the Space Needle constructed?',
            'Seafair of 1950',
            'The 1970 Maritime Festival',
            'The 1962 Worlds Fair'
        ],
        question: [
            'Which park offers the classic postcard view of Seattle?',
            'Discovery Park',
            'Judkins Park',
            'Kerry Park'
        ],
        question: [
            'What is the name of the Major League soccer team in Seattle?',
            'Seahawks',
            'Chieftains',
            'Sounders'
        ],
        question: [
            'What two mountain ranges are visible from Seattle?',
            'Coastal Range & Trinity Alps',
            'The Rockies & The Sierra Nevadas',
            'Olympic Mountains & Cascade Range'
        ],
        question: [
            'What is the name of the market famous for fish throwing?',
            'International District Market',
            'Seattle Center Market',
            'Pike Place Market'
        ],
        question: [
            'Seattle rapper Macklemore filmed part of the music video to his hit song Thrift Shop in which Capitol Hill thrift store?',
            'Out of the Closet Thrift Shop',
            'Crossroads Trading Company',
            'Value Village'
        ],
        question: [
            'Name three neighborhoods in Seattle',
            'Bainbridge, High Hill, Central Market',
            'Bellevue, Hayworth, Second Hill',
            'Capitol Hill, Ballard, Queen Anne'
        ],
        question: [
            'Which body of water lies on the eastern side of the city?',
            'Lake Union',
            'The Puget Sound',
            'Lake Washington'
        ],
    }];

    var currentQuestion = [];

    var currentAnswers = [];
    var shuffledAnswers = [];
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

    function question() {
        for (var i = trivia.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = trivia[randomIndex]; 
            trivia[randomIndex] = trivia[i]; 
            trivia[i] = itemAtIndex;
            currentQuestion.push(itemAtIndex);
            console.log(currentQuestion);
            $('#question').text(itemAtIndex.question[0]);
            currentAnswers.push(itemAtIndex.question[1]);
            currentAnswers.push(itemAtIndex.question[2]);
            currentAnswers.push(itemAtIndex.question[3]);
            currentCorrect = itemAtIndex.question[3];
            console.log(currentAnswers);
            console.log(currentCorrect);

            for (var i = currentAnswers.length-1; i >=0; i--) {
                var randomIndex = Math.floor(Math.random()*(i+1)); 
                var itemAtIndex = currentAnswers[randomIndex]; 
                currentAnswers[randomIndex] = currentAnswers[i]; 
                currentAnswers[i] = itemAtIndex;
                shuffledAnswers.push(itemAtIndex);
                console.log(shuffledAnswers);
                $('#answers').append('<li><input type="radio">' + itemAtIndex + '</input></li>');
                
                var input = $('#answers:checked');
                var userGuess = input.checked;
                if(userGuess === currentCorrect) {
                    correct++;
                    $('#message').text('Correct!')
                    // go to next question with timer
                }
                else {
                    incorrect++;
                    $('#message').html('Incorrect :(' +'<br>' + 'Correct Answer: ' + currentCorrect);
                    // go to next question with timer
                    //
                }
            } 
        } 
    };

    $('#start-newgame').on('click', function() {
        question();
    });


});


