function wielangenoch(dlSize,dlSpeedMbps) {

    var dlSize = document.getElementById("dlSize").value;
    var dlSpeedMbps = document.getElementById("dlSpeed").value;
    var currSize = document.getElementById("crSize").value;

    var sizeRemainingMB = (dlSize - currSize)*1000;
    var currentTime = new Date();
    var timeRemainingMs = (1/((1 / sizeRemainingMB) * (dlSpeedMbps / 8)))*1000;
    var timeDone = new Date(currentTime.getTime() + timeRemainingMs);

    document.getElementById("remaining").innerHTML =
        "It will take " + (timeRemainingMs / 1000 / 60 / 60).toFixed(2)  +
        " hours " + (timeRemainingMs / 1000 / 60).toFixed(2)  + " minutes or " +
        (timeRemainingMs / 1000).toFixed(2) + " seconds";
    
    document.getElementById("current").innerHTML = "Download will be finished at: " +
        timeDone.toLocaleTimeString();
}

