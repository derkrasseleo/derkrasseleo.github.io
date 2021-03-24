var geld = 0;
var counter = 0;
function rechner() {
    counter++;
    if (counter >= 2) {
        alert("Noch einmal berechnen?");
        geld = 0;
        rechnen();
        console.log(test);
    }
    else {
        rechnen();
    }

}
function rechnen() {
    if (document.getElementById("mute").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("smoke").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("castle").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("pulse").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("doc").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("rook").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("kapkan").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("tachanka").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("jaeger").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("bandit").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("frost").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("valkyrie").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("cavaira").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("echo").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("mira").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("lesion").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("ela").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("vigil").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("maestro").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("alibi").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("clash").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("kaid").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("mozzy").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("warden").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("goyo").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("wamai").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("oryx").checked == true) 
        geld = geld + 25000;
    if (document.getElementById("melusi").checked == true) 
        geld = geld + 25000;
    if (document.getElementById("aruni").checked == true) 
        geld = geld + 25000;

    <!-- Angreifer -->

    if (document.getElementById("sledge").checked == true) 
    geld = geld + 1000;
    if (document.getElementById("thatcher").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("ash").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("thermite").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("twitch").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("montagne").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("glaz").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("fuze").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("blitz").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("iq").checked == true) 
        geld = geld + 1000;
    if (document.getElementById("buck").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("blackbeard").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("capitao").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("hibana").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("jackal").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("ying").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("zofia").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("dokkaebi").checked == true) 
        geld = geld + 10000;
    if (document.getElementById("lion").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("finka").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("maverick").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("nomad").checked == true) 
        geld = geld + 15000;
    if (document.getElementById("gridlock").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("nokk").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("amaru").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("kali").checked == true) 
        geld = geld + 20000;
    if (document.getElementById("iana").checked == true) 
        geld = geld + 25000;
    if (document.getElementById("ace").checked == true) 
        geld = geld + 25000;
    if (document.getElementById("zero").checked == true) 
        geld = geld + 25000;
    if (document.getElementById("flores").checked == true) 
        geld = geld + 25000;
    
    spiele = geld / 250;
    zeit = spiele * 15 / 60;
    zeittage = zeit/24;

    document.getElementById("spiele").innerHTML = "Du musst noch " + spiele + " Spiele spielen";
    document.getElementById("geld").innerHTML = "... oder noch " + geld + " Ansehen verdienen";
    document.getElementById("zeit").innerHTML = "... oder " + zeit + " Stunden bzw. " + zeittage + " Tage durchgehend spielen";

}