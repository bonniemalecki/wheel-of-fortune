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
var done = 0; 

var clues = ["Adam Sandler As Happy Gilmore",
"Anthony Hopkins As Nixon",
"Bob Denver As Gilligan",
"Candice Bergen As Murphy Brown",
"Don Johnson As Nash Bridges",
"Eddie Murphy As The Nutty Professor",
"Elizabeth Taylor & Richard Burton In Cleopatra",
"Fran Drescher As The Nanny",
"Jim Carrey As Ace Ventura",
"Lea Thompson As Caroline In The City",
"Marlo Thomas As That Girl",
"Michael Douglas As The American President",
"Paul Newman As Butch Cassidy",
"Peter Falk As Columbo",
"Peter O'Toole As Lawrence Of Arabia",
"Pierce Brosnan As James Bond",
"Sally Field As Norma Rae",
"Sally Field As The Flying Nun",
"Steve Martin In Father Of The Bride",
"Telly Savalas As Kojak",
"Tom Hanks As Forrest Gump",
"Tom Selleck As Magnum P.I.",
"Val Kilmer As Batman"
]; 
var clue; 

function GenRandNum(min, max) {
    var myTarget;
    myTarget = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return myTarget;
    }

function btn_Startonclick() {
    var clueNum = GenRandNum(0, 22);
    clue = clues[clueNum]; 
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
        while (done == 0){
            if (wheelr1[i] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr1[i] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i]; 
            }

        } 
    }
    if (round == 2){
        for(i = 0; i <= 23; i++){
            if (wheelr1[i] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr1[i] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            //} else if (i == 23) {
                //i = 0; 
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i];
            }
        } 
    }
    if (round == 3){
        for(i = 0; i <= 23; i++){
            if (wheelr1[i] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr1[i] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            //} else if (i == 23) {
                //i = 0; 
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i];
            }
        } 
    }
}
 

function stopSpin() { 
    done = 1; 
    clearTimeout(stopTimer); 
    clearInterval(cardTimer);
    document.getElementById("txaCards").value += "\n" + "^^^^^ YOU LANDED HERE!!!"; 

    //var lines = $('txaCards').val().split('\n');
    //document.getElementById("txaCards").value = "" + lines[lines.length - 1]; 
}

function btnGuessClue_onclick() {
    var guess = document.getElementById('enterLetter').value; 
    if (guess == clue) {
        alert("Correct!"); 
    } else {
        alert("Wrong! The answer is " + clue); 
    }
}
