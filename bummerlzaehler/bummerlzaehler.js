var zaehler1 = 0;
var zaehler2 = 0;
var zaehler3 = 0;
var zaehler4 = 0;

var name_Spieler1;
var name_Spieler2;
var name_Spieler3;
var name_Spieler4;
var anzahl_Bummerl;

window.onload = function input() {

    var anzahl_Bummerl = prompt("Wie viele Bummerl Maximal ?", "5");
    var name_Spieler1 = prompt("Spieler 1:", "Spieler1");
    var name_Spieler2 = prompt("Spieler 2:", "Spieler2");
    var name_Spieler3 = prompt("Spieler 3:", "Spieler3");
    var name_Spieler4 = prompt("Spieler 4:", "Spieler4");

    document.getElementById("player1").innerHTML = name_Spieler1;
    document.getElementById("player2").innerHTML = name_Spieler2;
    document.getElementById("player3").innerHTML = name_Spieler3;
    document.getElementById("player4").innerHTML = name_Spieler4;
}

function addBummerl(spieler) {

    if (spieler == spieler1) {
        zaehler1++;
        document.getElementById("zaehler1").innerHTML = "Bummerl: " + zaehler1;
    } else if (spieler == spieler2) {
        zaehler2++;
        document.getElementById("zaehler2").innerHTML = "Bummerl: " + zaehler2;
    } else if (spieler == spieler3) {
        zaehler3++;
        document.getElementById("zaehler3").innerHTML = "Bummerl: " + zaehler3;
    } else if (spieler == spieler4) {
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

    if (zaehler1 || zaehler2 || zaehler3 >= anzahl_Bummerl) {
        switch (zaehler1, zaehler2, zaehler3, zaehler4) {
            case zaehler1:
                alert(name_Spieler1 + "Gewinnt!");
            case zaehler2:
                alert(name_Spieler2 + "Gewinnt!");
            case zaehler3:
                alert(name_Spieler3 + "Gewinnt!");
            case zaehler4:
                alert(name_Spieler4 + "Gewinnt!");
            default:
                alert("Niemand gewinnt?! (Sollte nicht passieren!)");
        }
    }
}

console.log(anzahl_Bummerl);
console.log(name_Spieler1);