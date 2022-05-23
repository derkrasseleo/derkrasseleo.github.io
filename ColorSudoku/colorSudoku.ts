var sudoku = [];
var colors = ["red", "#ff0000", "green", "blue", "yellow", "orange", "gold", "brown", "black"];

function zufallsZahl(sudokuArray:Array<number>) {
    var zz = Math.floor(Math.random() * 9) + 1;
        return zz;

}
function generateSudoku() {
    for (var i = 0; i < 9; i++) {
        sudoku[i] = [];
        for (var j = 0; j < 9; j++) {
            let zz = zufallsZahl(sudoku[i]);
            sudoku[i][j] = zz;
        }
    }
}
generateSudoku();

var clickCnt = 0;

function onButton() {
    if(clickCnt < 9) {
        this.style.backgroundColor = colors[clickCnt];
        this.innerHTML = clickCnt+1;
        if(this.style.backgroundColor == "black" || this.style.backgroundColor == "blue"){
            this.style.color = "white";
        }
        else {
            this.style.color = "black";
        }
        clickCnt++;
    }
    if (clickCnt === 9) {
        clickCnt = 0;
    }
}

var buttonCnt:number = 0;  

sudoku.forEach(outer => {
    
    var cnt = 0;  
    
    function generateButton(inner) {
        var btn = document.createElement("button");
        //btn.innerHTML = inner;
        btn.id = buttonCnt.toString();
        //btn.id = sudoku[inner][outer];
        //btn.onclick = onButton;
        btn.addEventListener("click", onButton);
        btn.style.backgroundColor = colors[inner];
        if(btn.style.backgroundColor == "black" || btn.style.backgroundColor == "blue"){
            btn.style.color = "white";
        }
        btn.style.fontSize = "30px";
        btn.style.width = "50px";
        btn.style.height = "50px";
        document.getElementById("sudokuField").appendChild(btn);
        buttonCnt++;
    }
    function generateDivider() {
        var divider = document.createElement("hr");
        divider.style.border = "5px solid black";
        divider.style.width = "290px";
        document.getElementById("sudokuField").appendChild(divider);
    }
    
    outer.forEach(inner => {

        generateButton(inner);
        cnt++;

        if(cnt%9 == 0){
            var br = document.createElement("br");
            document.getElementById("sudokuField").appendChild(br);
        }
    });
});