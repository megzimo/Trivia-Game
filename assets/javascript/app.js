$(document).ready(function() {

    // create object containing questions/answers and other key/value pairs
let triviaQs = [    
    q1 =
        {
        qIndex: 0,
        question: "Origially from Denton, TX, this band now calls Brooklyn home. Name that band!",
        answer: "Parquet Courts",
        answerChoices: ["Ty Segall", "Jeff the Brotherhood", "Parquet Courts", "Meatwave"],
        video: <iframe src="https://www.youtube.com/embed/eZXS8Jpkiac?rel=0&amp;showinfo=0&amp;start=23&amp;end=35"></iframe>
        },
    q2 =
        {
        qIndex: 1,
        question: "This super-group hails from many different countries across the world, and is fronted by 18 year old Orono Noguchi. Name that band!",
        answer: "Superorganism",
        answerChoices: ["Orono Noguchi and the Mothers", "Catpower", "The Ton Tons", "Superorganism"],
        video: <iframe src="https://www.youtube.com/embed/mJQYRzAoErc?rel=0&amp;showinfo=0&amp;start=73&amp;end=90"></iframe>
        },
    q3 =
        {
        qIndex: 2,
        question: "An Austin original, this band works with to Burger Records to produce their post-punk tunes. Name that band!",
        answer: "Hundred Visions",
        answerChoices: ["Hundred Visions", "The Meatbodies", "Thee Oh Sees", "King Gizzard and the Lizard Wizard"],
        video: <iframe src="https://www.youtube.com/embed/roGpWlNUD_E?rel=0&amp;showinfo=0&amp;start=49&amp;end=60"></iframe>
    ];

    // create variables
    let qArray = [];
    let currentQuestion = 0;
    let playerGuess = '';
    let correctAnswer='';
    let timeLeft = 20;
    let counter = 0;

    // 'start' button function

    // display questions/start timer function
    function answerSelection() {
        timeLeft = 20;
        counter = setInterval(timer,1000)
        }


    // next question function

    // check timer function

    // reset function



}); // ENDS document.ready