// different arrays for the different rounds
// in array, 0 = Bankrupt and 1 = lose a turn 
var wheelr1 = [800, 700, 550, 750, 600, 0, 200, 650, 800, 600, 1, 
950, 350, 300, 2500, 0, 1, 900, 600, 900, 650, 800, 700, 650]; 
var wheelr2 = [100, 200, 0, 300, 800, 900, 1, 400, 3500, 200 , 200,
150, 250, 0, 250, 950, 650, 450, 700, 200, 650, 850, 200, 450];
var wheelr3 = [650, 850, 200, 450, 150, 0, 800, 1, 300, 200, 250,
250, 0, 100, 200, 950, 900, 300, 3500, 100, 200, 700, 650, 450]; 

//var stopTimer; // one time timer that stops spin
//var cardTimer;  // repeated timer that displays cards for the spin 

var round = 1; 
var done = 0; 
var spinNum = 0;

// player 1 info
var p1;
var p1rscore = 0;
var p1tscore = 0; 

// player 2 info
var p2;
var p2rscore = 0;
var p2tscore = 0; 

// who's turn 
var turn = 1; 

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

// generates random number
function GenRandNum(min, max) {
    var myTarget;
    myTarget = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return myTarget;
    }

function btn_Startonclick() {
    // determines the clue for the first round randomly 
    var clueNum = GenRandNum(0, 22);
    clue = clues[clueNum]; 

    // sets up players' names and starting scores.
    p1 = document.getElementById("userName_1").value; 
    p2 = document.getElementById("userName_2").value;
    p1rscore = document.getElementById("roundScore_1").value = 0;
    p1tscore = document.getElementById("totalScore_1").value = 0;
    p2rscore = document.getElementById("roundScore_2").value = 0;
    p2tscore = document.getElementById("totalScore_2").value = 0;
    
    
    

    // prompts player 1 to take spin
    alert("The category for the first round is Star & Role!\n" + p1 + ", please take your turn."); 
    
    // disables and enables appropriate buttons
    document.getElementById("btnSpin").disabled = false;
    document.getElementById("btnStart").enabled = false;
}


function btnSpin_onclick() {
    //clearTimeout(stopTimer);
    // generates random time for the wheel to spin
    //var spinTime = GenRandNum(3000, 5000); // was 3000 9000
    //cardTimer = setInterval(myWheel, 1000);
    //stopTimer = setTimeout(stopSpin, spinTime);

    var currCard = 0; 
    spinNum = GenRandNum(0, 23);

    // goes through wheel for round 1
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
    // goes through wheel for round 2
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
    // goes through wheel for round 3
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

    // determines appropriate action based off of card landed on 
    if (wheelr1[spinNum] == 0) {
        if (turn == 1) {
            p1rscore = 0; 
            turn = 2; 
        } else {
            p2rscore = 0; 
            turn = 1; 
        }
        alert("You landed on BANKRUPT! \nIt is now player " + turn + "'s turn."); 
        // disables and enables appropriate buttons
        document.getElementById("btnBuyVowel").disabled = true;
        document.getElementById("btnGuessLetter").disabled = true;
        document.getElementById("btnGuessClue").disabled = true;
    }
    else if (wheelr1[spinNum] == 1) {
        if (turn == 1) {
            turn = 2; 
        } else {
            turn = 1; 
        }
        alert("You landed on LOSE A TURN! \nIt is now player " + turn + "'s turn."); 
        // disables and enables appropriate buttons
        document.getElementById("btnBuyVowel").disabled = true;
        document.getElementById("btnGuessLetter").disabled = true;
        document.getElementById("btnGuessClue").disabled = true;
    } else {
        alert("You landed on " + "$" + wheelr1[spinNum] + "! \nPlease take a guess now.");
        // disables and enables appropriate buttons
        document.getElementById("btnBuyVowel").disabled = false;
        document.getElementById("btnGuessLetter").disabled = false;
        document.getElementById("btnGuessClue").disabled = false;
    } 
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
    var guess = document.getElementById("txtGuess").value; 
    if (guess == clue) {
        alert("Correct!");
        if (turn == 1) {
            p1 += wheelr1[spinNum]; 
        } else {
            p2 += wheelr1[spinNum]; 
        }
        round++;  
    } else {
        if (turn == 1) {
            turn = 2; 
        } else {
            turn = 1; 
        }
        alert("Your guess was incorrect. It is now player " + turn + "'s turn.");
        // disables and enables appropriate buttons
        document.getElementById("btnBuyVowel").disabled = true;
        document.getElementById("btnGuessLetter").disabled = true;
        document.getElementById("btnGuessClue").disabled = true;
    }
}

function btnGuessLetter_onclick() {
    var guess = document.getElementById("txtGuess").value; 
    var a = 'a'; 
    var e = 'e'; 
    var i = 'i';
    var o = 'o'; 
    var u = 'u'; 

    // checks to make sure guess isn't a vowel
    if (guess == a || guess == e || guess == i || guess == o || guess == u) {
        alert("Please buy a vowel if you are going to guess a vowel."); 
    } else {
        if (clue.includes(guess)) {
            alert("Your guess was correct! Please guess again.");
            if (turn == 1) {
                p1rscore += wheelr1[spinNum]; // Changed from p1 and p2 to p1rscore and p2rscore
            } else {
                p2rscore += wheelr1[spinNum]; 
            }
        } else {
            if (turn == 1) {
                turn = 2; 
            } else {
                turn = 1; 
            }
            alert("Your guess was incorrect. It is now player " + turn + "'s turn.");
            // disables and enables appropriate buttons
            document.getElementById("btnBuyVowel").disabled = true;
            document.getElementById("btnGuessLetter").disabled = true;
            document.getElementById("btnGuessClue").disabled = true;
        }
    }
}

function btnBuyVowel_onclick() {
    var guess = document.getElementById("txtGuess").value; 
    var a = 'a'; 
    var e = 'e'; 
    var i = 'i';
    var o = 'o'; 
    var u = 'u'; 
    
    // validates guess is a vowel 
    if (guess != a && guess != e && guess != i && guess != o && guess != u) {
        alert("Please enter a valid vowel if you are going to buy a vowel."); 
    } else {
        if (turn == 1) {
            p1rscore = p1rscore - 250; 
        }
        if (turn == 2) {
            p2rscore = p2rscore - 250; 
        }
        if (clue.includes(guess)) {
            alert("Your guess was correct");
            if (turn == 1) {
                p1rscore += wheelr1[spinNum]; 
            } else {
                p2rscore += wheelr1[spinNum];   // Changed from p1 and p2 to p1rscore and p2rscore
            }
        // guess was wrong. change turns 
        } else {
            if (turn == 1) {
                turn = 2; 
            } else {
                turn = 1; 
            }
            alert("Your guess was incorrect. It is now player " + turn + "'s turn.");
            // disables and enables appropriate buttons
            document.getElementById("btnBuyVowel").disabled = true;
            document.getElementById("btnGuessLetter").disabled = true;
            document.getElementById("btnGuessClue").disabled = true;
        }
    }
}
