const { doc } = require("r6operators");

function wielangenoch(dlSize,dlSpeed) {

    var dlSize = document.getElementById("dlSize").value;
    var dlSpeed = 0;
    var currSize = document.getElementById("crSize").value;

    if(document.getElementById("unit").value == "mbit")
        dlSpeed = document.getElementById("dlSpeed").value/8;
    else if (document.getElementById("unit").value == "mbyte")
        dlSpeed = document.getElementById("dlSpeed").value;
    else
        console.log("Error");

    var sizeRemaining = (dlSize - currSize)*1000; 
    var currentTime = new Date();
    var timeRemaining = (1/((1 / sizeRemaining) * (dlSpeed)));
    var timeDone = new Date(currentTime.getTime() + (timeRemaining*1000));

    document.getElementById("hrErgebnisse").removeAttribute("hidden");
    
    if(sizeRemaining<=0)
    {
        console.log("Downloadgröße gleich null oder negativ");    
        document.getElementById("remaining").innerHTML = "Eingabe macht keinen Sinn";
        document.getElementById("current").innerHTML = "Downloadgröße gleich null oder negativ";
    }
    else {
        document.getElementById("remaining").innerHTML =
            "It will take " + (timeRemaining / 60 / 60 / 24).toFixed(2) + " days, " +(timeRemaining / 60 / 60).toFixed(2)  +
            " hours, " + (timeRemaining / 60).toFixed(2)  + " minutes or " +
            (timeRemaining).toFixed(2) + " seconds";
        document.getElementById("current").innerHTML = "Download will be finished at: " +
        timeDone.toLocaleString();
    }

}

