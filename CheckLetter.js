window.onload = function(e) { //makes sure window is loaded
    console.log("==window loaded==");

    function Player(name, roundScore, totalScore){
        console.log("==Player==");
        this.name = name;
        this.roundScore = roundScore;
        this.totalScore = totalScore; //Creating the constructor creating one player for now
      };

      var gameStuff = {
        playerArray: [],
        currPlayer: 0,
        currRound: 1,
        clueArray: [], //Read from JSON
        wheelArray: [], //Take from Bonnies Work
        curClue: "",
        curValue: "",
        activateButtons: function(){
          //console.log("==activateButtons==");
          //$('#startGame').on('click', game.checkUser);    // Possible to have to use the activate to start the games
          //$('#loadPuzzle').on('click', game.loadPuzzle);
        },
        checkUser: function(){
          console.log("--checkUser--");
          if ($('#userName_1').val()) {
            game.makePlayers();
          } else {
            alert("Please enter a valid name for this player.")
          }
        },
        
        createPlayers: function() {

        var player1Name = 'userName_1' //Check for validation if we get up to it
        var player1 = new Player(player1Name, 0, 0); // Creates one player and connects it to the HTML
        gameStuff.playerArray.push(player1);
         },

        buyVowel: function(){
            console.log("--buyVowel--");
            var guessedVowel = $('#enterLetter').val();
            var vowels = "a e i o u";
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

    checkLetter: function(){
        console.log("--checkLetter--");                      //Makes sure that the letter entered is on the board for the puzzel
        var guessedLetter = $('#enterLetter').val();
        if (guessedLetter.length != 0) {
          var letterCount = 0;
          for (var i = 0; i < game.currentPhrase.length; i++) {
            if (game.currentPhrase[i] == guessedLetter) {
              $('#letter_' + i + '> p').css("visibility", "visible");
              letterCount++;
            } else {
              console.log("==checkNextLetter==");
            }
          }
          if (letterCount == 0) {
            game.currentPlayer = game.currentPlayer+1;
            if (game.currentPlayer == game.playerArray.length) {
              game.currentPlayer = 0;
            }
          } else {
            game.addScore();
          }
          $('#enterLetter').val("");
        } else {
          alert("Please enter a letter")
        };
        console.log("game.currentPlayer", game.currentPlayer);
        game.highlightPlayer();
      }, 
   
    addScore: function(){
        console.log("==addScore==");
        if (game.currPlayer == 0){
          var updateOneScore = (game.playerArray[0].roundScore + game.currentValue);
          game.playerArray[0].roundScore = updateOneScore; // adding the score per number of letters
          $('#roundScore_1').text(updateOneScore);
          // console.log("game.playerArray[0].roundScore", game.playerArray[0].roundScore);
        };
    }
}
}
            
            
            
  