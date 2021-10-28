var wheelr1 = ['$800', '$700', '$550', '$750', '$600', 'BANKRUPT', '$200', '$650', '$800', '$600', 'LOSE TURN', 
'$950', '$350', '$300', '$2500', 'BANKRUPT', 'LOSE TURN', '$900', '$600', '$900', '$650', '$800', '$700', '$650']; 
var wheelr2 = [];
var wheelr3 = []; 

var stopTimer; // one time timer that stops spin
var cardTimer;  // repeated timer that displays cards for the spin
var i = 0; 

function GenRandNum(min, max) {
    var myTarget;
    myTarget = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return myTarget;
    }

function btnSpin_onclick() {
    clearTimeout(stopTimer);
    var spinTime = GenRandNum(3000, 9000); 
    cardTimer = setInterval(myWheel, 1000);
    stopTimer = setTimeout(stopSpin, spinTime);
}

function myWheel() { 
    for(i = 0; i <= 23; i++){
        document.getElementById("txaCards").value += wheelr1[i] + "\n";
    } 
} 

function stopSpin() { 
    clearTimeout(stopTimer); 
    clearInterval(cardTimer);
    document.getElementById("txaCards").value += "^^^^^ YOU LANDED HERE!!!"; 
}


