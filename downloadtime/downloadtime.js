function wielangenoch(dlSize,dlSpeedMbps) {

    var dlSize = document.getElementById("dlSize").value;
    var dlSpeedMbps = 0;
    var currSize = document.getElementById("crSize").value;


    if(document.getElementById(unit).getAttribute(value) == "mbit")
        dlSpeedMbps = document.getElementById("dlSpeed").value;
    else if (document.getElementById(unit).getAttribute(value) == "mbyte")
        dlSpeedMbps = document.getElementById("dlSpeed").value;
    else
        console.log("Error");

    var sizeRemaining = (dlSize - currSize)*1000; 
    var currentTime = new Date();
    var timeRemainingMs = (1/((1 / sizeRemaining) * (dlSpeedMbps / 8)))*1000;
    var timeDone = new Date(currentTime.getTime() + timeRemainingMs);

    document.getElementById("remaining").innerHTML =
        "It will take " + (timeRemainingMs / 1000 / 60 / 60).toFixed(2)  +
        " hours " + (timeRemainingMs / 1000 / 60).toFixed(2)  + " minutes or " +
        (timeRemainingMs / 1000).toFixed(2) + " seconds";
    
    document.getElementById("current").innerHTML = "Download will be finished at: " +
        timeDone.toLocaleTimeString();
}

