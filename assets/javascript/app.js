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
        },
        {
        questionNum: "4",
        question: "An indie rock band from Cleveland, Ohio, this band features the gruff and identifiable vocals of Dylan Baldi. Name that band!",
        answer: "Cloud Nothings",
        choice1: "Together PANGEA", 
        choice2:"The Soft Pack", 
        choice3:"Interpol", 
        choice4:"Cloud Nothings",
        video: "https://www.youtube.com/embed/74TP8QhupLU?rel=0&amp;showinfo=0&amp;start=49&amp;end=60"
        },
        {
        questionNum: "5",
        question: "Influenced by nuevo flamenco, rock, and heavy metal, this Mexican duo have fingers that fly over guitar strings in their mainly instrumental duets. Name that band!",
        answer: "Rodrigo y Gabriela",
        choice1: "Paco De Lucia", 
        choice2:"Rodrigo y Gabriela", 
        choice3:"Ceu", 
        choice4:"Strunz and Farah",
        video: "https://www.youtube.com/embed/l-qgum7hFXk?rel=0&amp;showinfo=0&amp;start=49&amp;end=60"
        }
    ];
    

    // create variables
    let gameInit = false;
    let number = 0; // counts question
    var correct = 0;
    let incorrect = 0;
    let timeLeft = 20;
    let qRemaining = 5;

    // adjusting what becomes visible upon page load
    $('.answers').addClass('hide');
    $('.qDisplay').addClass('hide');
    $('.card').addClass('hide');
    $('.musicVideo').addClass('hide');
    $('.stats').addClass('hide');
    $('.next').addClass('hide');

     
    //game begin
    $('.start').on('click', function() {
        gameInit = true;
        $('.start').addClass('hide');
        $('.next').removeClass('hide');
        $('.answers').removeClass('hide');
        $('.qDisplay').removeClass('hide');
        $('.card').removeClass('hide');
        $('.musicVideo').removeClass('hide');
        $('.stats').removeClass('hide');
        $('.intro').addClass('hide');
        $('.qLeft').html("Questions Remaining: " + qRemaining);

        // show questions & answers
    function showQnA () {
        $('.qDisplay').html(triviaQs[number].question);
        $('.choice1').html(triviaQs[number].choice1);
        $('.choice2').html(triviaQs[number].choice2);
        $('.choice3').html(triviaQs[number].choice3);
        $('.choice4').html(triviaQs[number].choice4);
        // update music video
        $('.musicVideo').attr('src', triviaQs[number].video);
    }
    showQnA ();
     // start timer function
        console.log("game started? ", gameInit);
        // let timerId = setInterval(countdown, 1000);
        // function countdown() {
        //     if (timeLeft == -1) {
        //         clearTimeout(timerId);
        //         outOfTime();
        //         gameInit === false;
        //     } else {
        //         $('.timer').html("Time Remaining: " + timeLeft + ' seconds');
        //         timeLeft--;
        //     }
        // };
        // function outOfTime() {
        //     $('.timer').html("You ran out of time!!");
        // }

    // check if answer chosen is equal to correct answer
        $('.ans-btn').on('click', function (e){
            // console.log(e);
            console.log("number: ", number);
        // reset timer
            let answerChoice = (e.target.innerText);
            console.log("answer choice: ", answerChoice);
            console.log("trivia q answer: ", triviaQs[number].answer)
            checkAnswer(answerChoice); 
        });
 
        function checkAnswer(answerChoice) {
            if(answerChoice === triviaQs[number].answer){
                correct++;
                $('.correct').html("Correct: " + correct ) 
            }
            else { 
                incorrect++;
                $('.incorrect').html("Incorrect: " + incorrect )
            }
        }

        $('.next').on('click', function (){
            number++;
            showQnA();
        });
    });


// Replay button
    $('.replay').on('click', function() {

    });

   

    

    // check timer function
// ----------YOUR CODE HERE ------------ //

    // reset function
// ----------YOUR CODE HERE ------------ //



}); //ENDS doc.ready()



// TIMER //
// when an answer is selected stop timer
// when next button is selected reset timer

// NEXT BUTTON
// 

// SCORE TRACKER //
// if selection = answer increase correct answer by 1
// selection is wrong increase wrong answer by 1
// if all the way through the array (while less than array length) update instruction container with score % triggers end of game 

// START TRIGGER //
// reset timer, display next question 