function wielangenoch() {

    var dlSize = document.getElementById("dlSize").value;
    var dlSpeed = document.getElementById("dlSpeed").value;
    var crSize = document.getElementById("crSize").value;

    var sizeRemaining = dlSize - crSize;

    var currentTime = new Date();
    var timeRemaining = ((1 / (sizeRemaining / 1000)) * dlSpeed);
    var timeDone = new Date(Date.now() - timeRemaining);

    document.getElementById("remaining").innerHTML =
        "It will take " + (timeRemaining / 60 / 60).toFixed(2) +
        " hours or " + (timeRemaining / 60).toFixed(2) + " minutes or " +
        timeRemaining.toFixed(2) + " seconds";

    document.getElementById("current").innerHTML = "Download will be finished at: " +
        timeDone.getHours() + " : " + timeDone.getMinutes() + " .";

}