var anzahl_Bummerl;

interface Player {
    name_player: string;
    zaehler: number;
};

window.onload = function input() {

    var anzahl_Bummerl = prompt("Wie viele Bummerl Maximal ?", "5");

    var player_count: number = Number(prompt("Wie viele Spieler?"));

    var players: Player [] = [];

    players.forEach(element => {
        
    });

    for (let i = 0; i <= player_count; i++) {
        player_number: Number = this["player"+i];
        var player: Player = {
            name_player : prompt("player $i:", "player1"),
            zaehler : 0,
        }
    }

    document.

    var player1: player = {
        name_player : prompt("player 1:", "player1"),
        zaehler : 0,
    }
    var player2: player = {
        name_player : prompt("player 2:", "player2"),
        zaehler : 0,
    }
    var player3: player = {
        name_player : prompt("player 3:", "player3"),
        zaehler : 0,
    }
    var player4: player = {
        name_player : prompt("player 4:", "player4"),
        zaehler : 0,
    }

    document.getElementById("player1").innerHTML = name_player1;
    document.getElementById("player2").innerHTML = name_player2;
    document.getElementById("player3").innerHTML = name_player3;
    document.getElementById("player4").innerHTML = name_player4;
}

function addBummerl(player: string) {

    if (player == "player1") {
        zaehler1++;
        document.getElementById("zaehler1").innerHTML = "Bummerl: " + zaehler1;
    } else if (player == "player2") {
        zaehler2++;
        document.getElementById("zaehler2").innerHTML = "Bummerl: " + zaehler2;
    } else if (player == "player3") {
        zaehler3++;
        document.getElementById("zaehler3").innerHTML = "Bummerl: " + zaehler3;
    } else if (player == "player4") {
        zaehler4++;
        document.getElementById("zaehler4").innerHTML = "Bummerl: " + zaehler4;
    } else {
        alert("Kein player angegeben ?");
    }
}

function deleteBummerl(player) {
    if (player == player1 && zaehler1 >= 1) {
        zaehler1--;
        document.getElementById("zaehler1").innerHTML = "Bummerl: " + zaehler1;
    } else if (player == player2 && zaehler2 >= 1) {
        zaehler2--;
        document.getElementById("zaehler2").innerHTML = "Bummerl: " + zaehler2;
    } else if (player == player3 && zaehler3 >= 1) {
        zaehler3--;
        document.getElementById("zaehler3").innerHTML = "Bummerl: " + zaehler3;
    } else if (player == player4 && zaehler4 >= 1) {
        zaehler4--;
        document.getElementById("zaehler4").innerHTML = "Bummerl: " + zaehler4;
    } else {
        alert("Kein player angegeben oder Bummerl kleiner 0");
    }
}

function bummerlCheck() {

    console.log("BUMMERLCHECK!");

    if (zaehler1 || zaehler2 || zaehler3 >= anzahl_Bummerl) {
        
        if (zaehler1) {
            alert(name_player1 + "Gewinnt!");
        }
        else if (zaehler2) {
            alert(name_player2 + "Gewinnt!");
        }
        else if (zaehler3) {
            alert(name_player2 + "Gewinnt!");           
        }
        else if (zaehler4) {
            alert(name_player2 + "Gewinnt!");
        }
        
    }
}

console.log(anzahl_Bummerl);
console.log(name_player1);