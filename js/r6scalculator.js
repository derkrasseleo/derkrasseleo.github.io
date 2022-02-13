var money = 0;
var counter = 0;

function calculate() {
    counter++;
    if (counter >= 2) {
        alert("Calculate again?");
        money = 0;
        rechnen();
    } else {
        rechnen();
    }
}

function rechnen() {

    //Defeneders

    if (document.getElementById("mute").checked == true)
        money += 1000;
    if (document.getElementById("smoke").checked == true)
        money += 1000;
    if (document.getElementById("castle").checked == true)
        money += 1000;
    if (document.getElementById("pulse").checked == true)
        money += 1000;
    if (document.getElementById("doc").checked == true)
        money += 1000;
    if (document.getElementById("rook").checked == true)
        money += 1000;
    if (document.getElementById("kapkan").checked == true)
        money += 1000;
    if (document.getElementById("tachanka").checked == true)
        money += 1000;
    if (document.getElementById("jaeger").checked == true)
        money += 1000;
    if (document.getElementById("bandit").checked == true)
        money += 1000;
    if (document.getElementById("frost").checked == true)
        money += 10000;
    if (document.getElementById("valkyrie").checked == true)
        money += 10000;
    if (document.getElementById("cavaira").checked == true)
        money += 10000;
    if (document.getElementById("echo").checked == true)
        money += 10000;
    if (document.getElementById("mira").checked == true)
        money += 10000;
    if (document.getElementById("lesion").checked == true)
        money += 10000;
    if (document.getElementById("ela").checked == true)
        money += 10000;
    if (document.getElementById("vigil").checked == true)
        money += 10000;
    if (document.getElementById("maestro").checked == true)
        money += 10000;
    if (document.getElementById("alibi").checked == true)
        money += 10000;
    if (document.getElementById("clash").checked == true)
        money += 10000;
    if (document.getElementById("kaid").checked == true)
        money += 10000;
    if (document.getElementById("mozzie").checked == true)
        money += 15000;
    if (document.getElementById("warden").checked == true)
        money += 15000;
    if (document.getElementById("goyo").checked == true)
        money += 15000;
    if (document.getElementById("wamai").checked == true)
        money += 15000;
    if (document.getElementById("oryx").checked == true)
        money += 20000;
    if (document.getElementById("melusi").checked == true)
        money += 20000;
    if (document.getElementById("aruni").checked == true)
        money += 20000;
    if (document.getElementById("thunderbird").checked == true)
        money += 25000;
    if (document.getElementById("thorn").checked == true)
        money += 25000;

    // Attackers

    if (document.getElementById("sledge").checked == true)
        money += 1000;
    if (document.getElementById("thatcher").checked == true)
        money += 1000;
    if (document.getElementById("ash").checked == true)
        money += 1000;
    if (document.getElementById("thermite").checked == true)
        money += 1000;
    if (document.getElementById("twitch").checked == true)
        money += 1000;
    if (document.getElementById("montagne").checked == true)
        money += 1000;
    if (document.getElementById("glaz").checked == true)
        money += 1000;
    if (document.getElementById("fuze").checked == true)
        money += 1000;
    if (document.getElementById("blitz").checked == true)
        money += 1000;
    if (document.getElementById("iq").checked == true)
        money += 1000;
    if (document.getElementById("buck").checked == true)
        money += 10000;
    if (document.getElementById("blackbeard").checked == true)
        money += 10000;
    if (document.getElementById("capitao").checked == true)
        money += 10000;
    if (document.getElementById("hibana").checked == true)
        money += 10000;
    if (document.getElementById("jackal").checked == true)
        money += 10000;
    if (document.getElementById("ying").checked == true)
        money += 10000;
    if (document.getElementById("zofia").checked == true)
        money += 10000;
    if (document.getElementById("dokkaebi").checked == true)
        money += 10000;
    if (document.getElementById("lion").checked == true)
        money += 10000;
    if (document.getElementById("finka").checked == true)
        money += 10000;
    if (document.getElementById("maverick").checked == true)
        money += 10000;
    if (document.getElementById("nomad").checked == true)
        money += 10000;
    if (document.getElementById("gridlock").checked == true)
        money += 15000;
    if (document.getElementById("nokk").checked == true)
        money += 15000;
    if (document.getElementById("amaru").checked == true)
        money += 15000;
    if (document.getElementById("kali").checked == true)
        money += 15000;
    if (document.getElementById("iana").checked == true)
        money += 20000;
    if (document.getElementById("ace").checked == true)
        money += 20000;
    if (document.getElementById("zero").checked == true)
        money += 20000;
    if (document.getElementById("flores").checked == true)
        money += 25000;
    if (document.getElementById("osa").checked == true)
        money += 25000;

    money -= document.getElementById("ansehen").value;
    
    games = money / 250;
    time = games * 15 / 60;
    timeDays = (time / 24).toFixed(2);
    daysRealisticlyisticly = time / 2;

    //document.getElementById("games").innerHTML = "Du musst noch " + games + " games gamesn";
    //document.getElementById("geld").innerHTML = "oder noch " + geld + " Ansehen verdienen";
    //document.getElementById("time").innerHTML = "oder " + time + " Stunden bzw. " + timeDays + " Tage durchgehend gamesn";
    //document.getElementById("timeReal").innerHTML = "oder für " + daysRealisticlyisticly + " Tage 2h lang gamesn";

    alert("You have to play " + games + " more games \nearn " + money + " renown \nplay for " + time + " hours " + timeDays + " days straight \nor play " + daysRealisticlyisticly + " days for 2 hours each day");    
}