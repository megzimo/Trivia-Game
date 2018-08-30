$(document).ready(function() {

    // create array of objects containing questions/answers and other key/value pairs
let triviaQs =   [ 
        {
        questionNum: "1",
        question: "Origially from Denton, TX, this band now calls Brooklyn home. Name that band!",
        answer: "Parquet Courts",
        answerChoices: ["Ty Segall", "Jeff the Brotherhood", "Parquet Courts", "Meatwave"],
        // video: <iframe src="https://www.youtube.com/embed/eZXS8Jpkiac?rel=0&amp;showinfo=0&amp;start=23&amp;end=35"></iframe>
        },
        {
        questionNum: "2",
        question: "This super-group hails from many different countries across the world, and is fronted by 18 year old Orono Noguchi. Name that band!",
        answer: "Superorganism",
        answerChoices: ["Orono Noguchi and the Mothers", "Catpower", "The Ton Tons", "Superorganism"],
        // video: <iframe src="https://www.youtube.com/embed/mJQYRzAoErc?rel=0&amp;showinfo=0&amp;start=73&amp;end=90"></iframe>
        },
        {
        questionNum: "3",
        question: "An Austin original, this band works with to Burger Records to produce their post-punk tunes. Name that band!",
        answer: "Hundred Visions",
        answerChoices: ["Hundred Visions", "The Meatbodies", "Thee Oh Sees", "King Gizzard and the Lizard Wizard"],
        // video: <iframe src="https://www.youtube.com/embed/roGpWlNUD_E?rel=0&amp;showinfo=0&amp;start=49&amp;end=60"></iframe>
        }
    ];
    

    // create variables
    let gameInit = false;
    let number = 0; // counts question
    let correct = 0;
    let incorrect = 0;
    let timeLeft = 20;


    // start timer function
    function answerSelection() {
        timeLeft = 20;
        counter = setInterval(timer,1000)
        }

    // 'start' button function
    $('.start').on('click', function() {
        gameInit = true;


        // function to loop through the object and display the question on the DOM
        function display () {
            for( let i = 0; i < triviaQs.length; i++ ){
                $('.qDisplay').html(triviaQs[number].question);
                number++; 
                return; // gives questions based on "number" which begins at index 0
            }
        }
        display ();
        $('.start').text("Next Question");           


        }); // ENDS Start Button()

    }); //ENDS doc.ready()


        // triviaQs.forEach( function (answerChoices) {
        //     let btnOpt = $('<button>');
        //     btnOpt.addClass ("btn btn-secondary btn-lg btn-block");

    // display questions - for loop going up by one referencing the key of the object append value to dom
        // keep track of if the question has come up
        // button to move to the next question
        // on page load show first question 

    // next question function - call timer function
        // when answer choice selected stop timer - take value of answer and feed back into js check if equal to value
        // console log the clicks (timer has started, timer has stopped, answer choice)

    // check timer function

    // reset function