var WheelGame = (function () {
  var wheel = new Wheel(),
      vowels = ['A', 'E', 'I', 'O', 'U'],
      wordDisplay,
      buyVowel = document.getElementById('vowel'),
      money = document.getElementById('money'),
      solve = document.getElementById('solve');

      function WheelGame(puzzles) {
        var _this = this;
        this.puzzles = puzzles;
        this.puzzles.randomize();
        this.currentMoney = 0;
        this.puzzleSolved = false;

        bindEvent(buyVowel, "click", function () {
            if (_this.currentMoney > 250) {
                if (_this.createGuessPrompt("You must enter a vowel here", true) !== false) {
                    _this.currentMoney -= 250;
                    _this.updateMoney();
                }
            } else {
                alert("You need more than $250 to buy a vowel");
            }
        });

        var spinTheWheel = function () {
          wheel.spin(function (valueSpun) {
              if (isNaN(valueSpun)) {
                  alert(valueSpun);
              } else {
                  //is a valid number
                  if (valueSpun === 0) {
                      alert('Bankrupt!');
                      _this.currentMoney = 0;
                  } else {
                      //spun greater than 0
                      var amountFound = _this.createGuessPrompt(valueSpun);
                      _this.currentMoney += (valueSpun * amountFound);
                  }
                  
                  
                  _this.updateMoney();

                  updateMoney = function () {
                    money.innerHTML = this.currentMoney;
                };
                
                guessLetter = function (guess, isVowel, solvingPuzzle) {
                  var timesFound = 0;
                  solvingPuzzle = solvingPuzzle === undefined ? false : true;
                  //find it:
                  if (guess.length && !this.puzzleSolved) {
                      if (!solvingPuzzle && !isVowel && (guess in vowels.toObject())) {
                          alert("Cannot guess a vowel right now!");
                          return false;
                      }
                      if (!solvingPuzzle && isVowel && !(guess in vowels.toObject())) {
                          alert("Cannot guess a consanant right now!");
                          return false;
                      }
                      if (guess in this.guessedArray) {
                          return 0;
                      }
                      for (var i = 0; i < this.currentPuzzleArray.length; ++i) {
                          if (guess == this.currentPuzzleArray[i]) {
                              wordDisplay.showLetter(i, guess);
                              ++timesFound;
                          }
                      }
                      if (timesFound > 0) {
                          this.guessedArray.push(guess);
                          if (this.guessedArray.length == this.lettersInPuzzle.length) {
                              run_confetti();
                              alert("PUZZLE SOLVED!");
                              this.puzzleSolved = true;  
                          }
                      }
                      return timesFound;
                  }
                  return false;
      
              };        
