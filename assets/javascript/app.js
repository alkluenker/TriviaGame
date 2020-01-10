//write a function to display the results after each question, whether hit submit or time runs out, then display the next question

    //including numbercorrect++ after each question, but don't display until the end

//when all questions finished, stop all the other code, hide the questions, and displays total wins and losses


//style to make it look better


//clean up the code






$(document).ready(function() {

    $(".questions, #updates").hide();
    
    userAnswer = "";

    correctAnswer = "";

    var count = 0;

    numberCorrect = 0;

    isCorrect = false;

    chosen = false;

    var allQuestions = [
        {
            question: "After helium and hydrogen, what is the most common element on the sun?",
            choiceOne: "Nitrogen",
            choiceTwo: "Oxygen",
            choiceThree: "Carbon",
    
            correct: "buttontwo",
            
        },

        {
            question: "What is the fastest planet in the solar system?",
            choiceOne: "Mercury",
            choiceTwo: "Jupiter",
            choiceThree: "Earth",

            correct: "buttonone",
        },

        {
            question: "What is the largest moon in the solar system?",
            choiceOne: "Saturn's Enceladus",
            choiceTwo: "Jupiter's Ganymede",
            choiceThree: "Neptune's Triton",

            correct: "buttontwo",
        },

        {
            question: "What is the windiest planet in the solar system?",
            choiceOne: "Venus",
            choiceTwo: "Uranus",
            choiceThree: "Neptune",

            correct: "buttonthree",
        },

        {
            question: "What is the most common type of star found in the Milky Way?",
            choiceOne: "Red Dwarf Stars",
            choiceTwo: "Red Giant Stars",
            choiceThree: "White Dwarf Stars",

            correct: "buttonone",
        },

        {
            question: "How many moons are in our solar system?",
            choiceOne: "113",
            choiceTwo: "42",
            choiceThree: "181",

            correct: "buttonthree",
        },

        {
            question: "What type of galaxy is the most common in the universe?",
            choiceOne: "Spiral galaxies",
            choiceTwo: "Elliptical galaxies",
            choiceThree: "Irregular galaxies",

            correct: "buttontwo",
        },
        

    ]

    var seconds = 0;

    function displayStartScreen() {
        $("#title, #start").show();
        $("#updates").hide();
    }

    function begin() {
        count = 0;
        $("#title, #start").hide();
        $(".questions").show();
        displayQuestion();
        
        startStopwatch();
    
        timeDown();
    
        
    
        timeConverter();

    }

    $("#start").on("click", function() {

        begin();

        
       
        

    })

    var time = 5;

    var intervalID;

    function startStopwatch() {

        time = 5;

        $("#stopwatch").text("0:05")

        
        intervalID = setInterval(timeDown, 1000);
            

    }


    var timeUp = false;

    function timeDown() {

        time--

        

        if (time === -1) {
            
            timeUp = true;
            
            
            

            updateScreen();
            
        }

        if (count === allQuestions.length) {
            clearInterval(intervalID);
        }

        
        
        var converted = timeConverter(time);
        
        
        $("#stopwatch").text(converted)
        
        
        
    }
    
    

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }


        return minutes + ":" + seconds;

        

    }

    

   function displayQuestion() {

        if (count === allQuestions.length) {
            
            $(".questions").hide();

            
            $("#updates").text("Number Correct: " + numberCorrect);
            
            

            setTimeout(displayStartScreen, 5000);
            return
        }
        
        
        $(".currentquestion").text(allQuestions[count].question);
        $("#first").text(allQuestions[count].choiceOne);
        
        $("#second").text(allQuestions[count].choiceTwo);
        
        $("#third").text(allQuestions[count].choiceThree);
        
        
        $("#updates").hide();
        
        $("#stopwatch, .questions").show();

        

    
    }

    function nextQuestion() {
        
        
        count++


        setTimeout(displayQuestion, 2000);

        

    }
    


   

   var currentQuestion = allQuestions[count];

  

   
   $(".choices").click(function(e) {
       isCorrect = false;
       userAnswer = e.target.id;
       chosen = true;
       
       if (allQuestions[count].correct === userAnswer) {
           isCorrect = true;
           
        }

       
        
    })


    function updateScreen() {

        $("#stopwatch, .questions").hide();

        $("input[name=exampleRadios").prop("checked", false);

        

        
        if ((isCorrect === true) && (chosen === true)) {
            numberCorrect++
        }
       
        
        $("#updates").show();
        
        if ((isCorrect === true) && (chosen === true)) {
            $("#updates").text("correct");
        }
        
        else {
            $("#updates").text("wrong");
        }
        
        chosen = false;
        clearInterval(intervalID);

        nextQuestion();

        
        console.log(chosen);

        setTimeout(startStopwatch, 2000);

        console.log(userAnswer);
        console.log(numberCorrect);

    }

    function endGame() {
        $("#updates").text(numberCorrect);
    }
    
    
    $("#submitbutton").on("click", function() {

        updateScreen();
    })


    
})


