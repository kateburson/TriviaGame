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
    var submitted = false;
    var started = false;

    setTimeout(thirtySeconds, 1000 * 30);
    setTimeout(threeSeconds, 1000 * 3);

    function thirtySeconds() {
        $('#start-newgame').text("Time's Up!");
        console.log('time is up');
    };

    function threeSeconds() {
        submitted = false;
        console.log('three seconds');
    };

    function submit() {
        threeSeconds();
        var radioValue = $('input[name="radio"]:checked').val();     
        console.log(radioValue);
        if(radioValue === currentCorrect) {
            correct++;
            $('#message').text('Correct!')
        } else {
        incorrect++;
        $('#message').html('Incorrect :(' +'<br>' + 'Correct Answer: ' + currentCorrect);
        }
        submitted = true;
    };

    function question() {
        started = true;
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
            }
            console.log(shuffledAnswers);
            $('#answers').append('<li><input type="radio" name="radio" id="one" value="' + shuffledAnswers[0] + '">' + shuffledAnswers[0] + '</input></li>');
            $('#answers').append('<li><input type="radio" name="radio" id="one" value="' + shuffledAnswers[1] + '">' + shuffledAnswers[1] + '</input></li>');
            $('#answers').append('<li><input type="radio" name="radio" id="one" value="' + shuffledAnswers[2] + '">' + shuffledAnswers[2] + '</input></li>');
            thirtySeconds();
            $('#submit').on('click', function(){
                submit();
            });
        }
    };

    $('#start-newgame').on('click', function(){
        if(started === false) {
            question();
        } else if (started === true) {
            currentQuestion = [];
            currentAnswers = [];
            shuffledAnswers = [];
            currentCorrect = '';
        }
    });

});
