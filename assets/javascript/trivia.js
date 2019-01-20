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

    var count = 0;

    setInterval(thirtySeconds, 1000 * 30);
    setTimeout(fiveSeconds, 1000 * 5);

    function clear() {
        currentQuestion = [];
        currentAnswers = [];
        shuffledAnswers = [];
        currentCorrect = '';
    };

    function fiveSeconds(){
        clear();
        clearInterval(thirtySeconds);
    }

    function thirtySeconds() {
        $('#start-newgame').text("Time's Up!");
        console.log('time is up');
        count++;
        var radioValue = $('input[name="radio"]:checked').val();     
        console.log(radioValue);
        if(radioValue === currentCorrect) {
            correct++;
            $('#message').text('Correct!')
        } else {
        incorrect++;
        $('#message').html('Incorrect :(' +'<br>' + 'Correct Answer: ' + currentCorrect);
        }
        if(count>9){
            summary();
        }
    };



    function submit() {
        count++;
        var radioValue = $('input[name="radio"]:checked').val();     
        console.log(radioValue);
        if(radioValue === currentCorrect) {
            correct++;
            $('#message').text('Correct!')
        } else {
        incorrect++;
        $('#message').html('Incorrect :(' +'<br>' + 'Correct Answer: ' + currentCorrect);
        }
        fiveSeconds();
        if(count>9){
            summary();
        }
    };

    function displayQuestion(count) {
            currentQuestion.push(trivia[count]);
            console.log(currentQuestion);
            $('#question').text(trivia[count].question[0]);
            currentAnswers.push(trivia[count].question[1]);
            currentAnswers.push(trivia[count].question[2]);
            currentAnswers.push(trivia[count].question[3]);
            currentCorrect = trivia[count].question[3];
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
            $('#answers').empty();
            $('#answers').append('<li><input type="radio" name="radio" id="one" value="' + shuffledAnswers[0] + '">' + shuffledAnswers[0] + '</input></li>');
            $('#answers').append('<li><input type="radio" name="radio" id="one" value="' + shuffledAnswers[1] + '">' + shuffledAnswers[1] + '</input></li>');
            $('#answers').append('<li><input type="radio" name="radio" id="one" value="' + shuffledAnswers[2] + '">' + shuffledAnswers[2] + '</input></li>');

            $('#submit').on('click', function(){
                submit();
            });

        };

        function summary(){};

    $('#start-newgame').on('click', function(){
        displayQuestion(count);
    });

});
