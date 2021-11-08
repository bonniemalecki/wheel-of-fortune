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
        }