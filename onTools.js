function onTools() {
    // show tools div
    //document.getElementById("tools").style.display = "block";
    // hide main div
    function myFunction() {
        document.getElementById("tools").classList.toggle("show");
        document.getElementById("main").append(
            <div class="tools">
            <div><a href="https://leochras.com/r6srechner">R6S-Rechner</a></div>
            <div><a href="https://leochras.com/downloadtime">DownloadTime</a></div>
            <div><a href="https://leochras.com/bummerlzaehler">Bummerlzaehler</a></div>
            </div>)
      }
    //console.log("tools");
}
