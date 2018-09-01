$(document).ready(function() {

    // create array of objects containing questions/answers and other key/value pairs
let triviaQs =   [ 
        {
        questionNum: "1",
        question: "Origially from Denton, TX, this band now calls Brooklyn home. Name that band!",
        answer: "Parquet Courts",
        choice1: "Ty Segall",
        choice2: "Jeff the Brotherhood",
        choice3: "Parquet Courts",
        choice4:  "Meatwave",
        video: "https://www.youtube.com/embed/eZXS8Jpkiac?rel=0&amp;showinfo=0&amp;start=23&amp;end=35"
        },
        {
        questionNum: "2",
        question: "This super-group hails from many different countries across the world, and is fronted by 18 year old Orono Noguchi. Name that band!",
        answer: "Superorganism",
        choice1: "Orono Noguchi and the Mothers", 
        choice2:"Catpower", 
        choice3: "The Ton Tons", 
        choice4: "Superorganism",
        video: "https://www.youtube.com/embed/mJQYRzAoErc?rel=0&amp;showinfo=0&amp;start=73&amp;end=90"
        },
        {
        questionNum: "3",
        question: "An Austin original, this band works with to Burger Records to produce their post-punk tunes. Name that band!",
        answer: "Hundred Visions",
        choice1: "Hundred Visions", 
        choice2:"The Meatbodies", 
        choice3:"Thee Oh Sees", 
        choice4:"King Gizzard and the Lizard Wizard",
        video: "https://www.youtube.com/embed/roGpWlNUD_E?rel=0&amp;showinfo=0&amp;start=49&amp;end=60"
        }
    ];
    

    // create variables
    let gameInit = false;
    let number = 0; // counts question
    let correct = 0;
    let incorrect = 0;
    let timeLeft = 20;

    // adjusting what becomes visible upon page load
    $('.answers').addClass('hide');
    $('.qDisplay').addClass('hide');
    $('.card').addClass('hide');
    $('.musicVideo').addClass('hide');
    $('.stats').addClass('hide');

     
    //game begin
    $('.start').on('click', function() {
        gameInit = true;
        $('.answers').removeClass('hide');
        $('.qDisplay').removeClass('hide');
        $('.card').removeClass('hide');
        $('.musicVideo').removeClass('hide');
        $('.stats').removeClass('hide');
   
        // update music video
        $('.musicVideo').attr('src', triviaQs[number].video);

        // show questions & answers
        $('.qDisplay').html(triviaQs[number].question);
        $('.choice1').html(triviaQs[number].choice1);
        $('.choice2').html(triviaQs[number].choice2);
        $('.choice3').html(triviaQs[number].choice3);
        $('.choice4').html(triviaQs[number].choice4);
        
        // updates text on button to next question
        $('.start').text("Next Question");  
        
        // increases the question number value by one (starts at zero)
        number++;
    
     // start timer function
        console.log("game started? ", gameInit);
        let timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                outOfTime();
            } else {
                $('.timer').html("Time Remaining: " + timeLeft + ' seconds');
                timeLeft--;
            }
        }
        
        function outOfTime() {
            $('.timer').html("You ran out of time!!");
        }

    });

   
    // function answerSelection() {
        // if(gameInit === true){
        //     console.log("time left: ", timeLeft);
        //     // clockRunning = true;
        //     timeLeft = 20;
        //     intervalId = setInterval(timeLeft,1000);
        //     timeLeft--;
        //     $('.timer').html(timeLeft);
        //     };
        // };

    

    // check timer function
// ----------YOUR CODE HERE ------------ //

    // reset function
// ----------YOUR CODE HERE ------------ //



}); //ENDS doc.ready()