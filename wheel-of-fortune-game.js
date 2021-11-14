// in array, 0 = Bankrupt and 1 = lose a turn 
var wheelr1 = [800, 700, 550, 750, 600, 0, 200, 650, 800, 600, 1, 
950, 350, 300, 2500, 0, 1, 900, 600, 900, 650, 800, 700, 650]; 
var wheelr2 = [100, 200, 0, 300, 800, 900, 1, 400, 3500, 200 , 200,
150, 250, 0, 250, 950, 650, 450, 700, 200, 650, 850, 200, 450];
var wheelr3 = [650, 850, 200, 450, 150, 0, 800, 1, 300, 200, 250,
250, 0, 100, 200, 950, 900, 300, 3500, 100, 200, 700, 650, 450]; 

//var stopTimer; // one time timer that stops spin
//var cardTimer;  // repeated timer that displays cards for the spin
var currCard = 0; 
var round = 1; 
var done = 0; 

var p1;
var p1rscore = 0;
var p1tscore = 0; 

var p2;
var p2rscore = 0;
var p2tscore = 0; 


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
    // determines the clue for the first round randomly 
    var clueNum = GenRandNum(0, 22);
    clue = clues[clueNum]; 

    // sets up players
    p1 = document.getElementById("userName_1").value; 
    p2 = document.getElementById("userName_2").value; 

    // prompts player 1 to take spin
    alert("The category for the first round is Star & Role!\n" + p1 + ", please take your turn."); 
    
    // disables and enables appropriate buttons
    document.getElementById("btnSpin").disabled = false;
    document.getElementById("btnStart").disabled = true;
}


function btnSpin_onclick() {
    //clearTimeout(stopTimer);
    // generates random time for the wheel to spin
    //var spinTime = GenRandNum(3000, 5000); // was 3000 9000
    //cardTimer = setInterval(myWheel, 1000);
    //stopTimer = setTimeout(stopSpin, spinTime);

    // disables and enables appropriate buttons
    document.getElementById("btnBuyVowel").disabled = false;
    document.getElementById("btnGuessLetter").disabled = false;
    document.getElementById("btnGuessClue").disabled = false;
    document.getElementById("btnSpin").disabled = true;

    var spinNum = GenRandNum(0, 23);
    if (round == 1) {
        for (currCard = 0; currCard <= spinNum; currCard++) {
            if (wheelr1[currCard] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr1[currCard] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[currCard];
            } 
        }
    }
    else if (round == 2) {
        for (currCard = 0; currCard <= spinNum; currCard++) {
            if (wheelr2[currCard] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr2[currCard] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            } else if (currCard == 23) {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr2[currCard];
                currCard = 0; 
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr2[currCard]; 
            } 
        }
    }
    else {
        for (currCard = 0; currCard <= spinNum; currCard++) {
            if (wheelr3[currCard] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr3[currCard] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            } else if (currCard == 23) {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr3[currCard];
                currCard = 0; 
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr3[currCard]; 
            } 
        }
    }

    alert("You landed on " + "$" + wheelr1[spinNum] + "! \nPlease take a guess now."); 
}

/* function myWheel() { 
    // goes through array of cards for whatever round we are in
    if (round == 1){
        do {
            if (wheelr1[i] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr1[i] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            } else if (i == 23) {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i];
                i = 0; 
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i]; 
            }
            i++; 
        } while (i <= spinNum); 
    }
    if (round == 2){
        for(i = 0; i <= 23; i++){
            if (wheelr1[i] == 0) {
                document.getElementById("txaCards").value += "\n" + "BANKRUPT";
            }
            else if (wheelr1[i] == 1) {
                document.getElementById("txaCards").value += "\n" + "LOSE A TURN";
            } else if (i == 23) {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i];
                i = 0; 
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
            } else if (i == 23) {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i];
                i = 0; 
            } else {
                document.getElementById("txaCards").value += "\n" + "$" + wheelr1[i];
            }
        } 
    }
}
*/ 

/* function stopSpin() { 
    done = 1; 
    clearTimeout(stopTimer); 
    clearInterval(cardTimer);
    document.getElementById("txaCards").value += "\n" + "^^^^^ YOU LANDED HERE!!!"; 

    //var lines = $('txaCards').val().split('\n');
    //document.getElementById("txaCards").value = "" + lines[lines.length - 1]; 
}
*/

function btnGuessClue_onclick() {
    var guess = document.getElementById('enterLetter').value; 
    if (guess == clue) {
        alert("Correct!");
        round++;  
    } else {
        alert("Wrong! It is now the other player's turn"); 
    }
}
