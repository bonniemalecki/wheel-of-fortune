window.onload = function(e) { //makes sure window is loaded
    console.log("==window loaded==");



      var gameStuff = {
        playerArray: [], //Any Defaults given blank arrays or 0 1 
        currPlayer: 0,
        currRound: 1,
        clueArray: [], //Read from JSON
        wheelArray: [], //Take from Bonnies Work
        curClue: "",
        curValue: "",
        letters: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z,  
        
        },
        checkUser: function(){
          console.log("--checkUser--");
          if ($('#userName_1').val()) {
            game.makePlayers(); //This is checking to make sure that the user entered letters are valid.
          } else {
            alert("Please enter a valid name for this player.")
          }
        },
        
        createPlayers: function() {

        var player1Name = 'userName_1' //Check for validation if we get up to it
        var player1 = new Player(player1Name, 0, 0); // Creates one player and connects it to the HTML
        gameStuff.playerArray.push(player1);
         },

        function btnbuyVowel_onclick(){
            console.log("--buyVowel--");
            var guessedVowel = this.vowels.val();
            var vowels = "a e i o u"; // Create the vowel list.
            if (game.currPlayer == 0){ 
              if (game.playerArray[0].roundScore > 250) {
                alert("Please enter a vowel and click guess letter."); //If user has more then 250 to spend on a vowel
                var correctValue = vowels.indexOf(guessedVowel);
                if (correctValue == -1) {
                  alert("Please guess a vowel")        // If user does not enter a valid Vowel
                } else {
                  var newScoreOne = game.playerArray[0].roundScore - 250; //Takes away 250 if the vowel is bought and guessed
                  game.playerArray[0].roundScore = newScoreOne;
                  $('#roundScore_1').text(newScoreOne);
                  console.log("newScore", newScoreOne);
                }
            }
        }
    },

    function btncheckLetter_onclick(){
        console.log("--checkLetter--");                      //Makes sure that the letter entered is on the board for the puzzle
        var guessedLetter = this.letters.val();
        if (guessedLetter.length != 0) {
          var letterCount = 0;
          for (var i = 0; i < game.currentClue.length; i++) {
            if (game.currClue[i] == guessedLetter) {
                (letters + i).css("visibility", "visible"); //Creating a loop that allows us to //Trying to display the screen letters
              letterCount++;
            } else {
              console.log("==checkNextLetter==");
            }
          }
          if (letterCount == 0) {
            game.currPlayer = game.currPlayer+1;
            if (game.currPlayer == game.playerArray.length) { //
              game.currPlayer = 0;
            }
          } else {
            game.addScore();
          }
          $('#enterLetter').val("");
        } else {
          alert("Please enter a letter")
        };
        console.log("game.currentPlayer", game.currPlayer);
        
      }, 
   
    addScore: function(){
        onsole.log("==addScore==");
      if (game.currPlayer == 0){
        var updateOneScore = (game.playerArray[0].roundScore + game.currValue);
        game.playerArray[0].roundScore = updateOneScore; // adding the score per number of letters
        $('#roundScore_1').text(updateOneScore); // Attempting to add the scores after each round
        };
    },
     
      addTotalScore: function(){
      console.log("==addTotalScore==");
      if (game.currPlayer == 0){
        var updateTotalOne = (game.playerArray[0].totalScore + game.playerArray[0].currRound);
        game.playerArray[0].totalScore = updateTotalOne;
        $('#totalScore_1').text(updateTotalOne); // this time we are trying to add up the total amount of score from each round.
        game.playerArray[0].currRound = 0;
        $('#roundScore_1').text(0); //Take from the HTML
      } else {
        game.playerArray[0].currRound = 0;
        $('#roundScore_1').text(0);
      }  
    }
  }
}
