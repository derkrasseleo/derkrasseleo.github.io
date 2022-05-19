var zaehler1 = 0;
var zaehler2 = 0;
var zaehler3 = 0;
var zaehler4 = 0;

var nameSpieler1;
var nameSpieler2;
var nameSpieler3;
var nameSpieler4;
var anzahlBummerl;

let players=[];

class Player {
    constructor(name, counter) {
        this.name = name;
        this.counter = counter;
    }
}

window.onload = function input() {

    var playerCount = prompt("Wie viele Spieler?", "4");

    for (let i = 0; i < playerCount; i++) {
        players.push(prompt(String("Spieler " + i), "Name"));
        var player = document.createElement("div");
        player.innerHTML = "<p>players.at(i)</p>";
        document.body.appendChild(player);
    }
    
/*     var anzahl_Bummerl = prompt("Wie viele Bummerl Maximal ?", "5");
    var nameSpieler1 = prompt("Spieler 1:", "Spieler1");
    var nameSpieler2 = prompt("Spieler 2:", "Spieler2");
    var nameSpieler3 = prompt("Spieler 3:", "Spieler3");
    var nameSpieler4 = prompt("Spieler 4:", "Spieler4");

    document.getElementById("player1Name").innerHTML = nameSpieler1;
    document.getElementById("player2Name").innerHTML = nameSpieler2;
    document.getElementById("player3Name").innerHTML = nameSpieler3;
    document.getElementById("player4Name").innerHTML = nameSpieler4; */
}

function addBummerl(spieler) {
    
    if (spieler == "spieler1") {
        zaehler1++;
        document.getElementById("zaehler1").innerHTML = "Bummerl: " + zaehler1;
    } else if (spieler == "spieler2") {
        zaehler2++;
        document.getElementById("zaehler2").innerHTML = "Bummerl: " + zaehler2;
    } else if (spieler == "spieler3") {
        zaehler3++;
        document.getElementById("zaehler3").innerHTML = "Bummerl: " + zaehler3;
    } else if (spieler == "spieler4") {
        zaehler4++;
        document.getElementById("zaehler4").innerHTML = "Bummerl: " + zaehler4;
    } else {
        alert("Kein Spieler angegeben ?");
    }
}

function deleteBummerl(spieler) {
    if (spieler == spieler1 && zaehler1 >= 1) {
        zaehler1--;
        document.getElementById("zaehler1").innerHTML = "Bummerl: " + zaehler1;
    } else if (spieler == spieler2 && zaehler2 >= 1) {
        zaehler2--;
        document.getElementById("zaehler2").innerHTML = "Bummerl: " + zaehler2;
    } else if (spieler == spieler3 && zaehler3 >= 1) {
        zaehler3--;
        document.getElementById("zaehler3").innerHTML = "Bummerl: " + zaehler3;
    } else if (spieler == spieler4 && zaehler4 >= 1) {
        zaehler4--;
        document.getElementById("zaehler4").innerHTML = "Bummerl: " + zaehler4;
    } else {
        alert("Kein Spieler angegeben oder Bummerl kleiner 0");
    }
}

function bummerlCheck() {
    
    //    var zaehler1 = window.zaehler1;
    //    var zaehler2 = window.zaehler2;
    //    var zaehler3 = window.zaehler3;
    //    var zaehler4 = window.zaehler4;
    //   anzahl_Bummerl = window.anzahl_Bummerl;

    console.log("BUMMERLCHECK!");

    if (zaehler1 || zaehler2 || zaehler3 >= anzahlBummerl) {
        switch (zaehler1, zaehler2, zaehler3, zaehler4) {
            case zaehler1:
                alert(nameSpieler1 + "Gewinnt!");
            case zaehler2:
                alert(nameSpieler2 + "Gewinnt!");
            case zaehler3:
                alert(nameSpieler3 + "Gewinnt!");
            case zaehler4:
                alert(nameSpieler4 + "Gewinnt!");
            default:
                alert("Niemand gewinnt?! (Sollte nicht passieren!)");
        }
    }
}

console.log(anzahlBummerl);
console.log(nameSpieler1);