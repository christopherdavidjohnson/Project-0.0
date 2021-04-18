

const player1 = "X";
const player2 = "O";

let turnNumber = 1;

let player1name;
let player2name;

let currentPlayer = player1;
let firstPlayer = player2;

player1CurrentScore = 0;
player2CurrentScore = 0;

// Display input player names then hide input fields & create scoretable #p1score & #p2score
$("#myBtnP1").on('click', function() {
  player1name = ($("#player1").val());
  $("#myBtnP1").hide();
  $("#player1").hide();
  $(".player1divafter").html("<p ID='player1name'><b>X </b>" + player1name + "<b> X</b>" + "</p>" + "<p class='p1score scoretext' ID='p1score'>0</p>");
});
$("#myBtnP2").on('click', function() {
  player2name = ($("#player2").val());
  $("#myBtnP2").hide();
  $("#player2").hide();
  $(".player2divafter").html("<p ID='player2name'><b>O </b>" + player2name + "<b> O</b>" + "</p>" + "<p class='p2score scoretext' ID='p2score'>0</p>");
});


// Watch for click event and execute functions
$(".game-cell").on('click', function() {
// Is the cell empty? If so, fill it and switch current player.
  if ($(event.target).text()===""){
// Set the text to the value of the current player & add celebration image to cell
    ($(event.target).html(currentPlayer + "<img id='turn" + turnNumber + "' class='player" + currentPlayer + " celebrationimage' src='images/fireworks_final_speed.gif?" + turnNumber + "' alt='fireworks should be here'></img>"));

  console.log(turnNumber);
// Increase turn number
  turnNumber = (turnNumber + 1);


// Check for Win

// Switch Current Player
        if (currentPlayer === player1) {currentPlayer = player2}
          else {currentPlayer = player1};
        checkWinHardcoding();
            if (turnNumber === 10){$(".game-cell").text(""); turnNumber=1};
  }
});



      // FUNCTIONS

// Check Wins (hardcode) & Execute Win Function
let checkWinHardcoding = function() {

  // X Wins
    // Vertical
  if ($("#A1, #A2, #A3").text() === "XXX"){winnerFunctionX();}

  if ($("#B1, #B2, #B3").text() === "XXX"){winnerFunctionX()};
  if ($("#C1, #C2, #C3").text() === "XXX"){winnerFunctionX()};
    //Horizontal
  if ($("#A1, #B1, #C1").text() === "XXX"){winnerFunctionX()};
  if ($("#A2, #B2, #C2").text() === "XXX"){winnerFunctionX()};
  if ($("#A3, #B3, #C3").text() === "XXX"){winnerFunctionX()};
    //Diagonal
  if ($("#A1, #B2, #C3").text() === "XXX"){winnerFunctionX()};
  if ($("#C1, #B2, #A3").text() === "XXX"){winnerFunctionX()};

  // O wins
    // Vertical
  if ($("#A1, #A2, #A3").text() === "OOO"){winnerFunctionO()};
  if ($("#B1, #B2, #B3").text() === "OOO"){winnerFunctionO()};
  if ($("#C1, #C2, #C3").text() === "OOO"){winnerFunctionO()};
    // Horizontal
  if ($("#A1, #B1, #C1").text() === "OOO"){winnerFunctionO()};
  if ($("#A2, #B2, #C2").text() === "OOO"){winnerFunctionO()};
  if ($("#A3, #B3, #C3").text() === "OOO"){winnerFunctionO()};
    // Diagonal
  if ($("#A1, #B2, #C3").text() === "OOO"){winnerFunctionO()};
  if ($("#C1, #B2, #A3").text() === "OOO"){winnerFunctionO()};
}

// What to do when the game is won by X
let winnerFunctionX = function () {
  $(".playerX#turn0").delay(0).fadeIn(0);
  $(".playerX#turn1").delay(166).fadeIn(0);
  $(".playerX#turn2").delay(333).fadeIn(0);
  $(".playerX#turn3").delay(500).fadeIn(0);
  $(".playerX#turn4").delay(665).fadeIn(0);
  $(".playerX#turn5").delay(831).fadeIn(0);
  $(".playerX#turn6").delay(1000).fadeIn(0);
  $(".playerX#turn7").delay(1166).fadeIn(0);
  $(".playerX#turn8").delay(1332).fadeIn(0);


    if (player1 === "X"){(player1CurrentScore = player1CurrentScore + 1);
    $("#p1score").text(player1CurrentScore);
    }
      else if (player2 === "X"){(player2CurrentScore = player2CurrentScore + 1);
      $("#p2score").text(player2CurrentScore);
      }



  // Change who goes first
    if (firstPlayer === player1) {firstPlayer = player2}
      else {firstPlayer = player1};
          currentPlayer = firstPlayer;


          ($("img").on('click', function() {$(".game-cell").text("")}))
turnNumber = 1;
  }

// What to do when the game is won by O
let winnerFunctionO = function () {
  $(".playerO#turn0").delay(0).fadeIn(0);
  $(".playerO#turn1").delay(166).fadeIn(0);
  $(".playerO#turn2").delay(333).fadeIn(0);
  $(".playerO#turn3").delay(500).fadeIn(0);
  $(".playerO#turn4").delay(665).fadeIn(0);
  $(".playerO#turn5").delay(831).fadeIn(0);
  $(".playerO#turn6").delay(1000).fadeIn(0);
  $(".playerO#turn7").delay(1166).fadeIn(0);
  $(".playerO#turn8").delay(1332).fadeIn(0);


    if (player1 === "O"){(player1CurrentScore = player1CurrentScore + 1);
      $("#p1score").text(player1CurrentScore)
    }
    else if (player2 === "O"){(player2CurrentScore = player2CurrentScore + 1);
      $("#p2score").text(player2CurrentScore)}

      // Change who goes first
    if (firstPlayer === player1) {firstPlayer = player2}
      else {firstPlayer = player1};


    currentPlayer = firstPlayer;




    ($("img").on('click', function() {$(".game-cell").text("")}))
    turnNumber = 1;
}

// Who is the current player?
let findCurrentPlayerName = function () {
  if (currentPlayer === player1) {return player1name}
  else {return player2name}
}














// To Do List

//1. Mouse-over hover preview
//2. "Did you win?" function
//3. Input player names field
//4. Ongoing tally
//5. AI


////// How to create scalable (non hard coded) event win function
// click event ads x or o onto beginning of event target ID or as new ID

// horizontal check = create loop that looks for x*1 or o*1 and every time it finds one to keep tally. if the tally reaches the width/height number of grid then that player wins. then add 1 to the number and new loop. different loop checks x1* or o1* and keeps track this checks the vertical. horizontal is x1* x2*, x3*.

// js needs to be able to create the 'game-cell' divs with "grid size" user input
