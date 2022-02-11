var geld = 0;
var counter = 0;

function calculate() {
    counter++;
    if (counter >= 2) {
        alert("Calculate again?");
        geld = 0;
        rechnen();
    } else {
        rechnen();
    }
}

function rechnen() {

    //Defeneders

    if (document.getElementById("mute").checked == true)
        geld += 1000;
    if (document.getElementById("smoke").checked == true)
        geld += 1000;
    if (document.getElementById("castle").checked == true)
        geld += 1000;
    if (document.getElementById("pulse").checked == true)
        geld += 1000;
    if (document.getElementById("doc").checked == true)
        geld += 1000;
    if (document.getElementById("rook").checked == true)
        geld += 1000;
    if (document.getElementById("kapkan").checked == true)
        geld += 1000;
    if (document.getElementById("tachanka").checked == true)
        geld += 1000;
    if (document.getElementById("jaeger").checked == true)
        geld += 1000;
    if (document.getElementById("bandit").checked == true)
        geld += 1000;
    if (document.getElementById("frost").checked == true)
        geld += 10000;
    if (document.getElementById("valkyrie").checked == true)
        geld += 10000;
    if (document.getElementById("cavaira").checked == true)
        geld += 10000;
    if (document.getElementById("echo").checked == true)
        geld += 10000;
    if (document.getElementById("mira").checked == true)
        geld += 10000;
    if (document.getElementById("lesion").checked == true)
        geld += 10000;
    if (document.getElementById("ela").checked == true)
        geld += 10000;
    if (document.getElementById("vigil").checked == true)
        geld += 10000;
    if (document.getElementById("maestro").checked == true)
        geld += 10000;
    if (document.getElementById("alibi").checked == true)
        geld += 10000;
    if (document.getElementById("clash").checked == true)
        geld += 10000;
    if (document.getElementById("kaid").checked == true)
        geld += 10000;
    if (document.getElementById("mozzie").checked == true)
        geld += 15000;
    if (document.getElementById("warden").checked == true)
        geld += 15000;
    if (document.getElementById("goyo").checked == true)
        geld += 15000;
    if (document.getElementById("wamai").checked == true)
        geld += 15000;
    if (document.getElementById("oryx").checked == true)
        geld += 20000;
    if (document.getElementById("melusi").checked == true)
        geld += 20000;
    if (document.getElementById("aruni").checked == true)
        geld += 20000;
    if (document.getElementById("thunderbird").checked == true)
        geld += 25000;
    if (document.getElementById("thorn").checked == true)
        geld += 25000;

    // Attackers

    if (document.getElementById("sledge").checked == true)
        geld += 1000;
    if (document.getElementById("thatcher").checked == true)
        geld += 1000;
    if (document.getElementById("ash").checked == true)
        geld += 1000;
    if (document.getElementById("thermite").checked == true)
        geld += 1000;
    if (document.getElementById("twitch").checked == true)
        geld += 1000;
    if (document.getElementById("montagne").checked == true)
        geld += 1000;
    if (document.getElementById("glaz").checked == true)
        geld += 1000;
    if (document.getElementById("fuze").checked == true)
        geld += 1000;
    if (document.getElementById("blitz").checked == true)
        geld += 1000;
    if (document.getElementById("iq").checked == true)
        geld += 1000;
    if (document.getElementById("buck").checked == true)
        geld += 10000;
    if (document.getElementById("blackbeard").checked == true)
        geld += 10000;
    if (document.getElementById("capitao").checked == true)
        geld += 10000;
    if (document.getElementById("hibana").checked == true)
        geld += 10000;
    if (document.getElementById("jackal").checked == true)
        geld += 10000;
    if (document.getElementById("ying").checked == true)
        geld += 10000;
    if (document.getElementById("zofia").checked == true)
        geld += 10000;
    if (document.getElementById("dokkaebi").checked == true)
        geld += 10000;
    if (document.getElementById("lion").checked == true)
        geld += 10000;
    if (document.getElementById("finka").checked == true)
        geld += 10000;
    if (document.getElementById("maverick").checked == true)
        geld += 10000;
    if (document.getElementById("nomad").checked == true)
        geld += 10000;
    if (document.getElementById("gridlock").checked == true)
        geld += 15000;
    if (document.getElementById("nokk").checked == true)
        geld += 15000;
    if (document.getElementById("amaru").checked == true)
        geld += 15000;
    if (document.getElementById("kali").checked == true)
        geld += 15000;
    if (document.getElementById("iana").checked == true)
        geld += 20000;
    if (document.getElementById("ace").checked == true)
        geld += 20000;
    if (document.getElementById("zero").checked == true)
        geld += 20000;
    if (document.getElementById("flores").checked == true)
        geld += 25000;
    if (document.getElementById("osa").checked == true)
        geld += 25000;

    geld -= document.getElementById("ansehen").value;
    
    games = geld / 250;
    time = games * 15 / 60;
    timeDays = (time / 24).toFixed(2);
    daysRealisticlyisticly = time / 2;

    //document.getElementById("games").innerHTML = "Du musst noch " + games + " games gamesn";
    //document.getElementById("geld").innerHTML = "oder noch " + geld + " Ansehen verdienen";
    //document.getElementById("time").innerHTML = "oder " + time + " Stunden bzw. " + timeDays + " Tage durchgehend gamesn";
    //document.getElementById("timeReal").innerHTML = "oder für " + daysRealisticlyisticly + " Tage 2h lang gamesn";

    alert("You have to play " + games + " more games \n  earn " + geld + " credits \n  play for " + time + " hours  " + timeDays + " days straight \n or play " + daysRealisticlyisticly + " days for 2 hours each day");    
}