$(document).ready(function() {

    var trivia = [
        {
            question: 'Which mountain is visible from the city on a clear day?',
            answer: ['Denali','Mt. St. Helens'],
            correctAnswer: 'Mt. Rainier'
        },
        {
            question: 'Seattle is within which county?',
            answer: ['Everett County', 'Seattle County'],
            correctAnswer: 'King County'
        },
        {   question: 'For which event was the Space Needle constructed?',
            answer: ['Seafair of 1950', 'The 1970 Maritime Festival'],
            correctAnswer: 'The 1962 Worlds Fair'
        },
        {   question: 'Which park offers the classic postcard view of Seattle?',
            answer: ['Discovery Park', 'Judkins Park'],
            correctAnswer: 'Kerry Park'
        },
        {   question: "What is the name of Seattle's Major League soccer team?",
            answer: ['Seahawks', 'Chieftains'],
            correctAnswer: 'Sounders'
        },
        {   question: 'What two mountain ranges are visible from Seattle?',
            answer: ['Coastal Range & Trinity Alps', 'The Rockies & The Sierra Nevadas'],
            correctAnswer: 'Olympic Mountains & Cascade Range'
        },
        {   question: 'What is the name of the market famous for fish throwing?',
            answer: ['International District Market', 'Seattle Center Market'],
            correctAnswer: 'Pike Place Market'
        },
        {   question: 'Seattle rapper Macklemore filmed part of the music video to his hit song     Thrift Shop in which Capitol Hill thrift store?',
            answer: ['Out of the Closet Thrift Shop', 'Crossroads Trading Company'],
            correctAnswer: 'Value Village'
        },
        {   question: 'Name three neighborhoods in Seattle',
            answer: ['Bainbridge, High Hill, Central Market','Bellevue, Hayworth, Second Hill'],
            correctAnswer: 'Capitol Hill, Ballard, Queen Anne'
        },
        {   question: 'Which body of water lies on the eastern side of the city?',
            answer: ['Lake Union', 'The Puget Sound'],
            correctAnswer: 'Lake Washington'
        },
    ];

    var count = 0;
    var currentQuestion = [];
    var currentAnswers = [];
    var shuffledAnswers = [];
    var currentCorrect = '';

    var correct = 0;
    var incorrect = 0;

    var timeout5;
    var timeout30;
    var interval30;

    var clockRunning = false;
    var timeout5Running = false;
    var timeout30Running = false;
    var time = 30;
    started = false;

    function timer() {
        time--;
        $("#start-newgame").text(time);
    };

    function start() {
        if (!clockRunning) {
            interval30 = setInterval(timer, 1000);
            clockRunning = true;
        }
    };

    function startTimeout5() {
        if(!timeout5Running) {
            timeout5 = setTimeout(displayQuestion, 1000 * 5);
            timeoutRunning = true;
        }
    };

    function startTimeout30() {
        if(!timeout30Running) {
            timeout30 = setTimeout(timeout, 1000 * 30);
            timeout30Running = true;
        }
    };
    
    function clear() {
        currentQuestion = [];
        currentAnswers = [];
        shuffledAnswers = [];
        currentCorrect = '';
        time = 30;
        $('#question').empty();
        $('#answers').empty();
        $('#message').empty();
    };

    function submit() {
        $('#start-newgame').text('0');
        clearInterval(interval30);
        clockRunning = false;
        clearTimeout(timeout30);
        timeout30Running = false;
        count++;

        var radioValue = $('input[name="radio"]:checked').val();     
        console.log(radioValue);
        if(radioValue === currentCorrect) {
            correct++;
            $('#message').text('Correct!')
            startTimeout5();
        } else {
            incorrect++;
            $('#message').html('Incorrect' +'<br>' + 'Correct Answer: ' + currentCorrect);
            startTimeout5();
        } if(count>9){
            summary();
        }
        
    };

    function timeout() {
        $('#start-newgame').text("Time's Up!");
        clearInterval(interval30);
        clockRunning = false;
        console.log('timer cleared');
        clearTimeout(timeout30);
        timeout30Running = false;
        console.log('timeout cleared');
        count++;
        console.log(count);
        $('#message').html('Incorrect' +'<br>' + 'Correct Answer: ' + currentCorrect);
        startTimeout5();
        if(count > 9) {
            summary();
        }
    };

    function summary(){
        clear();
        started = false;
        clearTimeout(timeout5);
        timeout5Running = false;
        clearTimeout(timeout30);
        timeout30Running = false;
        clearInterval(interval30);
        clockRunning = false;
        $('#message').text('Correct Answers:' + correct);
        $('#message').append('Incorrect Answers:' + incorrect);
        $('#message').append(Math.floor(correct/10));
    };

    function displayQuestion() {
        started = true;
        clear();
        clearTimeout(timeout5);
        timeout5Running = false;
        start();
        startTimeout30();
        console.log(count);
        currentQuestion.push(trivia[count].question);
        console.log(currentQuestion);
        $('#question').text(trivia[count].question);
        currentAnswers.push(trivia[count].answer[0]);
        currentAnswers.push(trivia[count].answer[1]);
        currentAnswers.push(trivia[count].correctAnswer);
        currentCorrect = trivia[count].correctAnswer;
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


    $('#start-newgame').on('click', function(){
        if(started === false) {
        displayQuestion();
        }
    });

});
