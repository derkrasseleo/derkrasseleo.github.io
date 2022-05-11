var renown = 0;
var counter = 0;
var csvContent = "data:text/csv;charset=utf-8,";

function getAndSetProperties() {
    // for each operator get checked state
    console.log(localStorage.getItem("operators"));
    operators = localStorage.getItem("operators").split(",");
    operators.forEach(op => {
        document.getElementById(op).checked = true;
    });
}

function calculate() {
    counter++;
    if (counter >= 2) {
        alert("Calculate again?");
        renown = 0;
        rechnen();
    } else {
        rechnen();
    }
}

function updateOperatorItem() {
    localStorage.setItem("operators", "");
    checkedCheckboxes = document.querySelectorAll('input:checked');
    checkedCheckboxes.forEach(b => {
        if(b==checkedCheckboxes[0])
            localStorage.setItem("operators", (localStorage.getItem("operators") + b.id));
        else
            localStorage.setItem("operators", (localStorage.getItem("operators") + "," + b.id));
    });
}
    
function exportCSV() {

    updateOperatorItem();

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(localStorage.getItem("operators")));
    link.setAttribute("download", "my_operators.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file 
}

function importCSV() {
    
    console.log("importCSV");

    var reader = new FileReader();
    console.log(document.getElementById("fileChooser").files[0]);

    reader.onload = function(e) {
        operators = reader.result.split(",");
        console.log("Operators: " + operators);
        operators.forEach(op => {
            document.getElementById(op).checked = true;
        });
        console.log("File: " + reader.result);
    }

    reader.readAsText(document.getElementById("fileChooser").files[0]);
    
}

function deselectAll() {
    checkboxes = document.querySelectorAll('input:checked');
    checkboxes.forEach(cb => {
        cb.checked = false;
    });
    localStorage.setItem("operators", "");
}
    

function rechnen() {

    //Defeneders

    if (document.getElementById("mute").checked == true)
        renown += 1000;
    if (document.getElementById("smoke").checked == true)
        renown += 1000;
    if (document.getElementById("castle").checked == true)
        renown += 1000;
    if (document.getElementById("pulse").checked == true)
        renown += 1000;
    if (document.getElementById("doc").checked == true)
        renown += 1000;
    if (document.getElementById("rook").checked == true)
        renown += 1000;
    if (document.getElementById("kapkan").checked == true)
        renown += 1000;
    if (document.getElementById("tachanka").checked == true)
        renown += 1000;
    if (document.getElementById("jaeger").checked == true)
        renown += 1000;
    if (document.getElementById("bandit").checked == true)
        renown += 1000;
    if (document.getElementById("frost").checked == true)
        renown += 10000;
    if (document.getElementById("valkyrie").checked == true)
        renown += 10000;
    if (document.getElementById("cavaira").checked == true)
        renown += 10000;
    if (document.getElementById("echo").checked == true)
        renown += 10000;
    if (document.getElementById("mira").checked == true)
        renown += 10000;
    if (document.getElementById("lesion").checked == true)
        renown += 10000;
    if (document.getElementById("ela").checked == true)
        renown += 10000;
    if (document.getElementById("vigil").checked == true)
        renown += 10000;
    if (document.getElementById("maestro").checked == true)
        renown += 10000;
    if (document.getElementById("alibi").checked == true)
        renown += 10000;
    if (document.getElementById("clash").checked == true)
        renown += 10000;
    if (document.getElementById("kaid").checked == true)
        renown += 10000;
    if (document.getElementById("mozzie").checked == true)
        renown += 15000;
    if (document.getElementById("warden").checked == true)
        renown += 15000;
    if (document.getElementById("goyo").checked == true)
        renown += 15000;
    if (document.getElementById("wamai").checked == true)
        renown += 15000;
    if (document.getElementById("oryx").checked == true)
        renown += 20000;
    if (document.getElementById("melusi").checked == true)
        renown += 20000;
    if (document.getElementById("aruni").checked == true)
        renown += 20000;
    if (document.getElementById("thunderbird").checked == true)
        renown += 25000;
    if (document.getElementById("thorn").checked == true)
        renown += 25000;

    // Attackers

    if (document.getElementById("sledge").checked == true)
        renown += 1000;
    if (document.getElementById("thatcher").checked == true)
        renown += 1000;
    if (document.getElementById("ash").checked == true)
        renown += 1000;
    if (document.getElementById("thermite").checked == true)
        renown += 1000;
    if (document.getElementById("twitch").checked == true)
        renown += 1000;
    if (document.getElementById("montagne").checked == true)
        renown += 1000;
    if (document.getElementById("glaz").checked == true)
        renown += 1000;
    if (document.getElementById("fuze").checked == true)
        renown += 1000;
    if (document.getElementById("blitz").checked == true)
        renown += 1000;
    if (document.getElementById("iq").checked == true)
        renown += 1000;
    if (document.getElementById("buck").checked == true)
        renown += 10000;
    if (document.getElementById("blackbeard").checked == true)
        renown += 10000;
    if (document.getElementById("capitao").checked == true)
        renown += 10000;
    if (document.getElementById("hibana").checked == true)
        renown += 10000;
    if (document.getElementById("jackal").checked == true)
        renown += 10000;
    if (document.getElementById("ying").checked == true)
        renown += 10000;
    if (document.getElementById("zofia").checked == true)
        renown += 10000;
    if (document.getElementById("dokkaebi").checked == true)
        renown += 10000;
    if (document.getElementById("lion").checked == true)
        renown += 10000;
    if (document.getElementById("finka").checked == true)
        renown += 10000;
    if (document.getElementById("maverick").checked == true)
        renown += 10000;
    if (document.getElementById("nomad").checked == true)
        renown += 10000;
    if (document.getElementById("gridlock").checked == true)
        renown += 15000;
    if (document.getElementById("nokk").checked == true)
        renown += 15000;
    if (document.getElementById("amaru").checked == true)
        renown += 15000;
    if (document.getElementById("kali").checked == true)
        renown += 15000;
    if (document.getElementById("iana").checked == true)
        renown += 20000;
    if (document.getElementById("ace").checked == true)
        renown += 20000;
    if (document.getElementById("zero").checked == true)
        renown += 20000;
    if (document.getElementById("flores").checked == true)
        renown += 25000;
    if (document.getElementById("osa").checked == true)
        renown += 25000;

    updateOperatorItem();

    renown -= document.getElementById("ansehen").value; 
    games = (renown / 239).toFixed(2);
    time = (games * 15 / 60).toFixed(2);
    timeDays = (time / 24).toFixed(2);
    daysRealisticlyisticly = time / 2;

    alert("You have to play " + games + " more games \nearn " + renown + " renown \nplay for " + time + " hours " + timeDays + " days straight \nor play " + daysRealisticlyisticly + " days for 2 hours each day");    
}
