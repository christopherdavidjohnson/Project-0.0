const player1 = "O";
const player2 = "X";

let player1name;
let player2name;

let currentPlayer = player1;

// Watch for click event and execute function
$(".game-cell").on('click', function() {

// Is the cell empty? If so, fill it and switch current player.
  if (($(event.target).text()!="O") && ($(event.target).text()!="X")){

// Set the text to the value of the current player
    ($(event.target).text(currentPlayer));

// Switch Current Player
      if (currentPlayer === player1) {currentPlayer = player2}
        else {currentPlayer = player1}
  }
});

// Display input player names & hide input fields.
$("#myBtnP1").on('click', function() {
  player1name = ($("#player1").val());
  $("#myBtnP1").hide();
  $("#player1").hide();
  $(".player1divafter").html("<p ID='player1name'>" + player1name + "</p>" + "<p class='p1score scoretext'>s</p>");
});
$("#myBtnP2").on('click', function() {
  player2name = ($("#player2").val());
  $("#myBtnP2").hide();
  $("#player2").hide();
  $(".player2divafter").html("<p ID='player2name'>" + player2name + "</p>" + "<p class='p2score scoretext'>s</p>");
});














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
