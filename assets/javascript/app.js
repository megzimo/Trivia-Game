$(document).ready(function() {
  // create array of objects containing questions/answers and other key/value pairs
  let triviaQs = [
    {
      questionNum: "1",
      question:
        "Origially from Denton, TX, this band now calls Brooklyn home. Name that band!",
      answer: "Parquet Courts",
      choice1: "Ty Segall",
      choice2: "Jeff the Brotherhood",
      choice3: "Parquet Courts",
      choice4: "Meatwave",
      video:
        "https://www.youtube.com/embed/eZXS8Jpkiac?rel=0&amp;showinfo=0&amp;start=23&amp;end=35&autoplay=1"
    },
    {
      questionNum: "2",
      question:
        "This super-group hails from many different countries across the world, and is fronted by 18 year old Orono Noguchi. Name that band!",
      answer: "Superorganism",
      choice1: "Orono Noguchi and the Mothers",
      choice2: "Catpower",
      choice3: "The Ton Tons",
      choice4: "Superorganism",
      video:
        "https://www.youtube.com/embed/NM52w9xrdn4?rel=0&amp;showinfo=0&amp;start=53&amp;end=73&autoplay=1"
    },
    {
      questionNum: "3",
      question:
        "An Austin original, this band works with to Burger Records to produce their post-punk tunes. Name that band!",
      answer: "Hundred Visions",
      choice1: "Hundred Visions",
      choice2: "The Meatbodies",
      choice3: "Thee Oh Sees",
      choice4: "King Gizzard and the Lizard Wizard",
      video:
        "https://www.youtube.com/embed/roGpWlNUD_E?rel=0&amp;showinfo=0&amp;start=49&amp;end=60&autoplay=1"
    },
    {
      questionNum: "4",
      question:
        "An indie rock band from Cleveland, Ohio, this band features the gruff and identifiable vocals of Dylan Baldi. Name that band!",
      answer: "Cloud Nothings",
      choice1: "Together PANGEA",
      choice2: "The Soft Pack",
      choice3: "Interpol",
      choice4: "Cloud Nothings",
      video:
        "https://www.youtube.com/embed/SX9qxzbAu6E?rel=0&amp;showinfo=0&amp;start=215&amp;end=235&autoplay=1"
    },
    {
      questionNum: "5",
      question:
        "Influenced by nuevo flamenco, rock, and heavy metal, this Mexican duo have fingers that fly over guitar strings in their mainly instrumental duets. Name that band!",
      answer: "Rodrigo y Gabriela",
      choice1: "Paco De Lucia",
      choice2: "Rodrigo y Gabriela",
      choice3: "Ceu",
      choice4: "Strunz and Farah",
      video:
        "https://www.youtube.com/embed//wKd0HNg1kFQ?rel=0&amp;showinfo=0&amp;start=130&amp;end=150&autoplay=1"
    }
  ];

  // create variables
  let gameInit = false;
  let number = 0; // counts question
  var correct = 0;
  let incorrect = 0;
  let qRemaining = 5;
  let timerId;

  // adjusting what becomes visible upon page load
  $(".answers").addClass("hide");
  $(".qDisplay").addClass("hide");
  $(".card").addClass("hide");
  $(".musicVideo").addClass("hide");
  $(".stats").addClass("hide");
  $(".next").addClass("hide");

  //game begin
  $(".start").on("click", function() {
    gameInit = true;
    $(".start").addClass("hide");
    $(".next").removeClass("hide");
    $(".answers").removeClass("hide");
    $(".qDisplay").removeClass("hide");
    $(".card").removeClass("hide");
    $(".musicVideo").removeClass("hide");
    $(".stats").removeClass("hide");
    $(".intro").addClass("hide");
    $(".qLeft").html("Questions Remaining: " + qRemaining);

    // show questions & answers
    function showQnA() {
      $(".qDisplay").html(triviaQs[number].question);
      $(".choice1").html(triviaQs[number].choice1);
      $(".choice2").html(triviaQs[number].choice2);
      $(".choice3").html(triviaQs[number].choice3);
      $(".choice4").html(triviaQs[number].choice4);
      // update music video
      $(".musicVideo").attr("src", triviaQs[number].video);
    }
    showQnA();
    // start timer function
    console.log("game started? ", gameInit);
    function timer() {
      let timeLeft = 20;
      timerId = setInterval(countdown, 1000);
      function countdown() {
        if (timeLeft == 0) {
          clearTimeout(timerId);
          outOfTime();
          gameInit === false;
          console.log("game init??? ", gameInit);
        } else {
          $(".timer").html("Time Remaining: " + timeLeft + " seconds");
          timeLeft--;
        }
      }
    }
    timer();
    function outOfTime() {
      $(".timer").html("You ran out of time!!");
      $('.ans-btn').addClass('disabled');
    }

    // check if answer chosen is equal to correct answer
    $(".ans-btn").on("click", function(e) {
      console.log(e);
      console.log("number: ", number);
      clearInterval(timerId); // resets timer
      let answerChoice = e.target.innerText;
      console.log("answer choice: ", answerChoice);
      console.log("trivia q answer: ", triviaQs[number].answer);
      checkAnswer(answerChoice);

      if(answerChoice){
        $('.ans-btn').addClass('disabled');
      }
     // end of game
    if(number === triviaQs.length-1){
        $('.intro').removeClass("hide");
        $(".qDisplay").addClass("hide");
        $(".choice1").addClass("hide")
        $(".choice2").addClass("hide")
        $(".choice3").addClass("hide")
        $(".choice4").addClass("hide")
        $(".musicVideo").addClass("hide")
        $('.intro').text("You've finished! You answered " + correct  + " correct out of 5!")
    }
    });

    // compares clicked answer string to answer choice
    function checkAnswer(answerChoice) {
      if (answerChoice === triviaQs[number].answer) {
        correct++;
        $(".correct").html("Correct: " + correct);
      } else {
        incorrect++;
        $(".incorrect").html("Incorrect: " + incorrect);
      }
    }

    // attributes of next button that reset timer, updates question/answers and updates question number
    $(".next").on("click", function() {
        $('.ans-btn').removeClass('disabled');
        console.log("number: ", number);
        console.log("trivia Q length: ", triviaQs.length);
      number++;
      showQnA();
      timer();
    });
    
  }); //end of start-on click function

    // Replay button
  $(".replay").on("click", function() {
    let gameInit = false;
    let number = 0; // counts question
    var correct = 0;
    let incorrect = 0;
    let qRemaining = 5;
    let timerId;
  
    // adjusting what becomes visible upon page load
    $(".answers").addClass("hide");
    $(".qDisplay").addClass("hide");
    $(".card").addClass("hide");
    $(".musicVideo").addClass("hide"); 
    $(".musicVideo").removeAttr("src", triviaQs[number].video); // removes video and prevents music from playing upon reset
    $(".stats").addClass("hide");
    $(".next").addClass("hide");
    $(".intro").removeClass("hide");
    $(".start").removeClass("hide");
  });

}); //ENDS doc.ready()

