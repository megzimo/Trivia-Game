$(document).ready(function() {

    // create object containing questions/answers and other key/value pairs
    let triviaQs = [
        {
        qIndex: 0,
        question: "Origially from Denton, TX, this band now calls Brooklyn home. Name that band!",
        answer: "Parquet Courts",
        answerChoices: ["Ty Segall", "Jeff the Brotherhood", "Parquet Courts", "Meatwave"],
        // video: <iframe src="https://www.youtube.com/embed/eZXS8Jpkiac?rel=0&amp;showinfo=0&amp;start=23&amp;end=35"></iframe>
        },
        {
        qIndex: 1,
        question: "This super-group hails from many different countries across the world, and is fronted by 18 year old Orono Noguchi. Name that band!",
        answer: "Superorganism",
        answerChoices: ["Orono Noguchi and the Mothers", "Catpower", "The Tin Tins", "Superorganism"],
        // video: <iframe src="https://www.youtube.com/embed/mJQYRzAoErc?rel=0&amp;showinfo=0&amp;start=73&amp;end=90"></iframe>
        },
        {
        qIndex: 2,
        question: "An Austin original, this band works with to Burger Records to produce their post-punk tunes. Name that band!",
        answer: "Hundred Visions",
        answerChoices: ["Hundred Visions", "The Meatbodies", "Thee Oh Sees", "King Gizzard and the Lizard Wizard"],
        // video: <iframe src="https://www.youtube.com/embed/roGpWlNUD_E?rel=0&amp;showinfo=0&amp;start=49&amp;end=60"></iframe>
        }
    ];

    // create variables
    let qArray = [];
    let currentQuestion = 0;
    let playerGuess = '';
    let correctAnswer='';
    let timeLeft = 20;
    let counter = 0;

    // map out the array to place each answer choice in button
    // triviaQs.map(qOnly => {
   
    // let questionOnly = 
    //     `<div class="card">
    //         <div class="card-body qDisplay">${qOnly.question}</div>
    //     </div>`;
    // $(questionOnly).appendTo('.card').html;

    // let buttonChoices = //for loop somehow??
    //   <div class="answer-choices">
    //             <button type="button" class="btn btn-secondary btn-lg btn-block ">${buttonChoices.answerChoices}</button>
    //             <button type="button" class="btn btn-secondary btn-lg btn-block ">${buttonChoices.answerChoices}</button>
    //             <button type="button" class="btn btn-secondary btn-lg btn-block ">${buttonChoices.answerChoices}</button>
    //             <button type="button" class="btn btn-secondary btn-lg btn-block ">${buttonChoices.answerChoices}</button>
    //         </div>
    //     $(buttonChoices).appendTo('.btn-block').html;

    // }); //ENDS button map

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