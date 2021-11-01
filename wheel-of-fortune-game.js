function Player(name, roundScore, totalScore){
    console.log("==Player==");
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore; //Creating the constructor creating one player for now
  }
// in array, 0 = Bankrupt and 1 = lose a turn 

var wheelr1 = [800, 700, 550, 750, 600, 0, 200, 650, 800, 600, 1, 
950, 350, 300, 2500, 0, 1, 900, 600, 900, 650, 800, 700, 650]; 
var wheelr2 = [];
var wheelr3 = []; 

var stopTimer; // one time timer that stops spin
var cardTimer;  // repeated timer that displays cards for the spin
var i = 0; 
var round = 1; 

function GenRandNum(min, max) {
    var myTarget;
    myTarget = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return myTarget;
    }

function btnSpin_onclick() {
    clearTimeout(stopTimer);
    // generates random time for the wheel to spin
    var spinTime = GenRandNum(3000, 9000); 
    cardTimer = setInterval(myWheel, 1000);
    stopTimer = setTimeout(stopSpin, spinTime);
}

function myWheel() { 
    // goes through array of cards for whatever round we are in 
    if (round == 1){
        for(i = 0; i <= 23; i++){
            if (wheelr1[i] == 0) {
                document.getElementById("txaCards").value += "BANKRUPT" + "\n";
            }
            else if (wheelr1[i] == 1) {
                document.getElementById("txaCards").value += "LOSE A TURN" + "\n";
            //} else if (i == 23) {
                //i = 0; 
            } else {
                document.getElementById("txaCards").value += "$" + wheelr1[i] + "\n";
            }
        } 
    }
    if (round == 2){
        for(i = 0; i <= 23; i++){
            if (wheelr2[i] == 0) {
                document.getElementById("txaCards").value += "BANKRUPT";
            }
            else if (wheelr2[i] == 1) {
                document.getElementById("txaCards").value += "LOSE A TURN";
            } else {
                document.getElementById("txaCards").value += "$" + wheelr2[i] + "\n";
            }
        } 
    }
    if (round == 3){
        for(i = 0; i <= 23; i++){
            if (wheelr3[i] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT" + "\n";
            }
            else if (wheelr3[i] == 1) {
                document.getElementById("txaCards").value += "\n"+ "LOSE A TURN" + "\n";
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr3[i] + "\n";
            }
        } 
    }
    
} 

function stopSpin() { 
    clearTimeout(stopTimer); 
    clearInterval(cardTimer);
    document.getElementById("txaCards").value += "^^^^^ YOU LANDED HERE!!!"; 

    var lines = $('txaCards').val().split('\n');
    document.getElementById("txaCards").value = "" + lines[lines.length - 1]; 
}

function btnGuessClue_onclick() {

}
