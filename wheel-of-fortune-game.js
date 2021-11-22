// different wheel arrays for the different rounds
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

// clues for round 1 : Star & Role
const clues1 = ["Adam Sandler As Happy Gilmore",
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

// clues for round 2 : Fictional Characters
const clues2 = ["Aphrodite",
"Babar King Of The Elephants",
"Batman",
"Betty Rubble",
"Bugs Bunny",
"Count Dracula",
"Daffy Duck",
"Elmer Fudd",
"Flash Gordon",
"Huckleberry Finn",
"Indiana Jones",
"Jack Be Nimble",
"Johnny Appleseed",
"Lady Macbeth",
"Leprechaun",
"Little Red Riding Hood",
"Mother Goose",
"Nancy Drew",
"Olive Oyl",
"Papa Bear",
"Perry Mason",
"Pocahontas",
"Popeye The Sailor Man"
];

// clues for round 3: Things
const clues3 = ["Action-Adventure Films",
"Alfalfa Sprouts",
"Asterisks",
"Autumn Leaves",
"Bacon And Eggs",
"Bacon Bits",
"Bartlett Pears",
"Blueberry Muffins",
"Boxing Gloves",
"Bread Crumbs",
"Breath Mints",
"Bubbles",
"Buffalo Chicken Wings",
"Building Blocks",
"Checkers",
"Chestnuts",
"Chocolate Chips",
"Circles",
"Civil Rights",
"Coat And Tie",
"Coattails",
"Coffee With Cream And Two Sugars",
"Collectable Coins"
];

var clue = ""; 

// generates random number
function GenRandNum(min, max) {
    var myTarget;
    myTarget = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return myTarget;
    }

function btn_Startonclick() { 

    // determines the clue for the round randomly 
    var clueNum = GenRandNum(0, 22);

    if (round == 1) {
        // sets up players' names and scores
        p1 = document.getElementById("userName_1").value; 
        p2 = document.getElementById("userName_2").value;

        if (p1.length < 1 || p2.length < 1) {
            alert("Please enter your names to start the game."); 
        } else {   
            clue = clues1[clueNum]; 

            // fills in spaces green so player can guess more easily 
            for (var i = 0; i <= clue.length; i++) {
                if (clue[i] == " ") {
                    document.getElementById("box" + i).style.backgroundColor = "green"; 
                }
            }

            // prompts player 1 to take spin
            alert("The category for the first round is Star & Role!\n" + p1 + ", please take your turn."); 
            
            //displays scores
            document.getElementById("roundScore_1").value =  "$" + p1rscore; 
            document.getElementById("totalScore_1").value =  "$" + p1tscore; 
            document.getElementById("roundScore_2").value =  "$" + p2rscore; 
            document.getElementById("totalScore_2").value =  "$" + p2tscore;

            // disables and enables appropriate buttons
            document.getElementById("btnSpin").disabled = false;
            document.getElementById("btnStart").disabled = true;
        }
    } 
            
    if (round == 2) {
        clue = clues2[clueNum]; 

            // clears out board
            for (var i = 0; i <= 47; i++) {
                document.getElementById("box" + i).innerHTML = " "; 
                document.getElementById("box" + i).style.backgroundColor = "lightgray";
            }

            // fills in spaces green
            for (var i = 0; i <= clue.length; i++) {
                if (clue[i] == " ") {
                    document.getElementById("box" + i).style.backgroundColor = "green"; 
                }
            }

        alert("The category for the second round is Fictional Character!\n" + p1 + ", please take your turn."); 
        
        // displays scores
        document.getElementById("roundScore_1").value =  "$" + p1rscore; 
        document.getElementById("totalScore_1").value =  "$" + p1tscore; 
        document.getElementById("roundScore_2").value =  "$" + p2rscore; 
        document.getElementById("totalScore_2").value =  "$" + p2tscore;

        // disables and enables appropriate buttons
        document.getElementById("btnSpin").disabled = false;
        document.getElementById("btnStart").disabled = true;
    }
            
    if (round == 3) {
        clue = clues3[clueNum]; 

            // clears out board
            for (var i = 0; i <= 47; i++) {
                document.getElementById("box" + i).innerHTML = " "; 
                document.getElementById("box" + i).style.backgroundColor = "lightgray";
            }

            // fills in spaces green
            for (var i = 0; i <= clue.length; i++) { 
                if (clue[i] == " ") {
                    document.getElementById("box" + i).style.backgroundColor = "green"; 
                }
            }

        alert("The category for the last round is Things!\n" + p1 + ", please take your turn."); 

        // displays scores
        document.getElementById("roundScore_1").value =  "$" + p1rscore; 
        document.getElementById("totalScore_1").value =  "$" + p1tscore; 
        document.getElementById("roundScore_2").value =  "$" + p2rscore; 
        document.getElementById("totalScore_2").value =  "$" + p2tscore;

        // disables and enables appropriate buttons
        document.getElementById("btnSpin").disabled = false;
        document.getElementById("btnStart").disabled = true;
    }
}


function btnSpin_onclick() {
    //clearTimeout(stopTimer);
    // generates random time for the wheel to spin
    //var spinTime = GenRandNum(3000, 5000); // was 3000 9000
    //cardTimer = setInterval(myWheel, 1000);
    //stopTimer = setTimeout(stopSpin, spinTime);

    // picks what card to land on
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
            alert("You landed on BANKRUPT! \nIt is now " + p2 + "'s turn."); 
        } else {
            p2rscore = 0; 
            turn = 1; 
            alert("You landed on BANKRUPT! \nIt is now " + p1 + "'s turn."); 
        }
 
        // disables and enables appropriate buttons
        document.getElementById("btnBuyVowel").disabled = true;
        document.getElementById("btnGuessLetter").disabled = true;
        document.getElementById("btnGuessClue").disabled = true;
    }
    else if (wheelr1[spinNum] == 1) {
        if (turn == 1) {
            turn = 2; 
            alert("You landed on LOSE A TURN! \nIt is now " + p2 + "'s turn."); 
        } else {
            turn = 1; 
            alert("You landed on LOSE A TURN! \nIt is now " + p1 + "'s turn."); 
        }
        
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
        document.getElementById("btnSpin").disabled = true;
    } 
}

function btnGuessClue_onclick() {
    var guess = document.getElementById("txtGuess").value; 

    // if guess is correct
    if (guess.toUpperCase() == clue.toUpperCase()) {
        // displays clue
        for (var i = 0; i <= clue.length; i++) {
            document.getElementById("box" + i).innerHTML = clue.toUpperCase().charAt(i);
        }

        // game is over after 3 rounds
        if (round == 3) {
            alert("Your guess was correct! You won the round.");
            if (turn == 1) {
                p1rscore += wheelr1[spinNum];
                p1tscore += p1rscore; 
                p2tscore += p2rscore; 
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;  

                // determines winner of the game based off total score
                if (p1tscore > p2tscore) {
                    alert("Congrats!! " + p1 + " won the game!\n" + 
                    p1 + ": $" + p1tscore + "\n" +
                    p2 + ": $" + p2tscore);
                } else if (p2tscore > p1tscore) {
                    alert("Congrats!! " + p2 + " won the game!\n" + 
                    p1 + ": $" + p1tscore + "\n" +
                    p2 + ": $" + p2tscore); 
                } else {
                    alert("It's a tie!!\n" + 
                    p1 + ": $" + p1tscore + "\n" +
                    p2 + ": $" + p2tscore); 
                }
            } else {
                p2rscore += wheelr1[spinNum];
                p1tscore += p1rscore;  
                p2tscore += p2rscore; 
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore; 

                // determines winner of the game based off total score
                if (p1tscore > p2tscore) {
                    alert("Congrats!! " + p1 + " won the game!\n" + 
                    p1 + ": $" + p1tscore + "\n" +
                    p2 + ": $" + p2tscore);
                } else if (p2tscore > p1tscore) {
                    alert("Congrats!! " + p2 + " won the game!\n" + 
                    p1 + ": $" + p1tscore + "\n" +
                    p2 + ": $" + p2tscore); 
                } else {
                    alert("It's a tie!!\n" + 
                    p1 + ": $" + p1tscore + "\n" +
                    p2 + ": $" + p2tscore); 
                }
            }
        } else {
            alert("Your guess was correct! You won the round.");
                if (turn == 1) {
                   p1rscore += wheelr1[spinNum];
                   p1tscore += p1rscore; 
                   p2tscore += p2rscore; 
                   document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore; 
                    
                    // go to next round
                    round++;

                    // disables and enables appropriate buttons
                    document.getElementById("btnBuyVowel").disabled = true;
                    document.getElementById("btnGuessLetter").disabled = true;
                    document.getElementById("btnGuessClue").disabled = true;
                document.getElementById("btnSpin").disabled = true;
                document.getElementById("btnStart").disabled = false;
                } else {
                    p2rscore += wheelr1[spinNum]; 
                    p2tscore += p2rscore; 
                    p1tscore += p1rscore; 
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore; 

                    round++;

                // disables and enables appropriate buttons
                document.getElementById("btnBuyVowel").disabled = true;
                document.getElementById("btnGuessLetter").disabled = true;
                document.getElementById("btnGuessClue").disabled = true;
                document.getElementById("btnSpin").disabled = true;
                document.getElementById("btnStart").disabled = false;
        }  
    }
} else {
        //switches turns
        if (turn == 1) {
            turn = 2; 
            alert("Your guess was incorrect. It is now " + p2 + "'s turn.");
        } else {
            turn = 1; 
            alert("Your guess was incorrect. It is now " + p1 + "'s turn.");
        }

        // disables and enables appropriate buttons
        document.getElementById("btnBuyVowel").disabled = true;
        document.getElementById("btnGuessLetter").disabled = true;
        document.getElementById("btnGuessClue").disabled = true;
        document.getElementById("btnSpin").disabled = false;
    }
} 

function btnGuessLetter_onclick() {
    var guess = document.getElementById("txtGuess").value; 
    
    // keeps track of what has been guessed before 
    // makes it the other players turn if you guess a letter that's already been guessed
    /* for (var p = 0; p <= prevGuesses.length; i++) {
        if (guess.toUpperCase == prevGuesses[p].toUpperCase) {
            if (turn == 1) {
                turn = 2; 
                alert("That letter has already been guessed. It is now player " + turn + "'s turn.")
                // disables and enables appropriate buttons
                document.getElementById("btnBuyVowel").disabled = true;
                document.getElementById("btnGuessLetter").disabled = true;
                document.getElementById("btnGuessClue").disabled = true;
                document.getElementById("btnSpin").disabled = false;
            }
            if (turn == 2) {
                turn = 1; 
                alert("That letter has already been guessed. It is now player " + turn + "'s turn.")
                // disables and enables appropriate buttons
                document.getElementById("btnBuyVowel").disabled = true;
                document.getElementById("btnGuessLetter").disabled = true;
                document.getElementById("btnGuessClue").disabled = true;
                document.getElementById("btnSpin").disabled = false;
            }
        }
    }
    prevGuesses.push(guess); 
    */ 

    var occurrence = 0; 
    var a = 'a'; 
    var e = 'e'; 
    var i = 'i';
    var o = 'o'; 
    var u = 'u'; 

    // checks to make sure guess isn't a vowel
    if (guess.toUpperCase() == a.toUpperCase() || guess.toUpperCase() == e.toUpperCase() || 
            guess.toUpperCase() == i.toUpperCase() || guess.toUpperCase() == o.toUpperCase() || 
            guess.toUpperCase() == u.toUpperCase()) {
        alert("Please buy a vowel if you are going to guess a vowel."); 
    } else {
        // if correct
        if (clue.toUpperCase().includes(guess.toUpperCase())) {
            for (var i = 0; i <= clue.length; i++) {
                if (clue.toUpperCase().charAt(i) == guess.toUpperCase()) {
                    // displays the correctly guessed letter on board
                    document.getElementById("box" + i).innerHTML = clue.toUpperCase().charAt(i);
                    occurrence++; 
                }
            }
            alert("Your guess was correct! Please guess again.");
            if (round == 1){
            if (turn == 1) {
                // claculates score based off spin and how many time letter occured in the clue
                p1rscore += (wheelr1[spinNum] * occurrence);
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;  
            } else {
                p2rscore += (wheelr1[spinNum] * occurrence);
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;   
            }
        }
        if (round == 2){
            if (turn == 1) {
                p1rscore += (wheelr2[spinNum] * occurrence);
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;  
            } else {
                p2rscore += (wheelr2[spinNum] * occurrence);
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;   
            }
        }
        if (round == 3){
            if (turn == 1) {
                p1rscore += (wheelr3[spinNum] * occurrence);
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;  
            } else {
                p2rscore += (wheelr3[spinNum] * occurrence);
                document.getElementById("roundScore_1").value = "$" + p1rscore; 
                document.getElementById("totalScore_1").value = "$" + p1tscore; 
                document.getElementById("roundScore_2").value = "$" + p2rscore; 
                document.getElementById("totalScore_2").value = "$" + p2tscore;   
            }
        }
        } else {
            if (turn == 1) {
                turn = 2; 
                alert("Your guess was incorrect. It is now " + p2 + "'s turn.");
            } else {
                turn = 1; 
                alert("Your guess was incorrect. It is now " + p1 + "'s turn.");
            }
            
            // disables and enables appropriate buttons
            document.getElementById("btnBuyVowel").disabled = true;
            document.getElementById("btnGuessLetter").disabled = true;
            document.getElementById("btnGuessClue").disabled = true;
            document.getElementById("btnSpin").disabled = false;
        }
    }
}

function btnBuyVowel_onclick() {
    var guess = document.getElementById("txtGuess").value; 

    // keeps track of what has been guessed before 
    // makes it the other players turn if you guess a letter that's already been guessed
    /* for (var p = 0; p <= prevGuesses.length; i++) {
        if (guess.toUpperCase == prevGuesses[p].toUpperCase) {
            if (turn == 1) {
                turn = 2; 
                alert("That letter has already been guessed. It is now player " + turn + "'s turn.")
                // disables and enables appropriate buttons
                document.getElementById("btnBuyVowel").disabled = true;
                document.getElementById("btnGuessLetter").disabled = true;
                document.getElementById("btnGuessClue").disabled = true;
                document.getElementById("btnSpin").disabled = false;
            }
            if (turn == 2) {
                turn = 1; 
                alert("That letter has already been guessed. It is now player " + turn + "'s turn.")
                // disables and enables appropriate buttons
                document.getElementById("btnBuyVowel").disabled = true;
                document.getElementById("btnGuessLetter").disabled = true;
                document.getElementById("btnGuessClue").disabled = true;
                document.getElementById("btnSpin").disabled = false;
            }
        }
    }

    prevGuesses.push(guess);
    */ 
    
    var a = 'a'; 
    var e = 'e'; 
    var i = 'i';
    var o = 'o'; 
    var u = 'u'; 

    var bought = 1; 
    var occurrence = 0; 
    
    // validates guess is a vowel 
    if (guess.toUpperCase() != a.toUpperCase() && guess.toUpperCase() != e.toUpperCase() && guess.toUpperCase() != i.toUpperCase() && guess.toUpperCase() != o.toUpperCase() && guess.toUpperCase() != u.toUpperCase()) {
        alert("Please enter a valid vowel if you are going to buy a vowel.");
    } else {
        if (turn == 1) {
            if (p1rscore < 250) {
                alert("You don't have enough money to buy a vowel.");
                bought = 0; 
            } else {
                p1rscore = p1rscore - 250; 
            }
            document.getElementById("roundScore_1").value = "$" + p1rscore; 
            document.getElementById("totalScore_1").value = "$" + p1tscore; 
        }
        if (turn == 2) {
            if (p2rscore < 250) {
                alert("You don't have enough money to buy a vowel.")
                bought = 0; 
            } else {
                p2rscore = p2rscore - 250; 
            }
            document.getElementById("roundScore_2").value = "$" + p2rscore; 
            document.getElementById("totalScore_2").value = "$" + p2tscore;
        }
        // only subtracts money if they were able to buy the vowel
        if (bought == 1) {
            if (clue.toUpperCase().includes(guess.toUpperCase())) {
                for (var i = 0; i <= clue.length; i++) {
                    if (clue.toUpperCase().charAt(i) == guess.toUpperCase()) {
                        // displays correctly guessed letter on board
                        document.getElementById("box" + i).innerHTML = clue.toUpperCase().charAt(i);
                        occurrence++; 
                    }
                }
                alert("Your guess was correct! Please guess again.");
                if (round == 1) {
                if (turn == 1) {
                    p1rscore += (wheelr1[spinNum] * occurrence);
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore;  
                } else {
                    p2rscore += (wheelr1[spinNum] * occurrence);
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore; 
                }
            }
            if (round == 2) {
                if (turn == 1) {
                    p1rscore += (wheelr2[spinNum] * occurrence);
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore;  
                } else {
                    p2rscore += (wheelr2[spinNum] * occurrence);
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore; 
                }
            }
            if (round == 3) {
                if (turn == 1) {
                    p1rscore += (wheelr3[spinNum] * occurrence);
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore;  
                } else {
                    p2rscore += (wheelr3[spinNum] * occurrence);
                    document.getElementById("roundScore_1").value = "$" + p1rscore; 
                    document.getElementById("totalScore_1").value = "$" + p1tscore; 
                    document.getElementById("roundScore_2").value = "$" + p2rscore; 
                    document.getElementById("totalScore_2").value = "$" + p2tscore; 
                }
            }
            // guess was wrong. change turns 
            } else {
                if (turn == 1) {
                    turn = 2; 
                    alert("Your guess was incorrect. It is now " + p2 + "'s turn.");
                } else {
                    turn = 1; 
                    alert("Your guess was incorrect. It is now " + p1 + "'s turn.");
                }

                // disables and enables appropriate buttons
                document.getElementById("btnSpin").disabled = false;
                document.getElementById("btnBuyVowel").disabled = true;
                document.getElementById("btnGuessLetter").disabled = true;
                document.getElementById("btnGuessClue").disabled = true;
            }
        }
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
