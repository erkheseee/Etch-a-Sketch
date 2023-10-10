let initializeGrid = function() {
    html = ""
    for(let i=1; i<17; i++){
        html += '<div id="row">';
        for(let i=1; i<17; i++){
            html += '<div class="square" id="' + i + '"></div>'
        }
        html += "</div>";
    }
    grid = document.getElementById("grid");
    grid.innerHTML = html;
    hoverEffect();
}

let createGrid = function() {
    let input = prompt("Enter the number of rows/columns(Max: 100)");
    input = parseInt(input);
    if(input < 0 || input > 100){
        alert("Over maximum range!");
        initializeGrid;
    }
    html = ""
    for(let i=1; i<input+1; i++){
        html += '<div id="row">';
        for(let i=1; i<input+1; i++){
            html += '<div class="square" id="' + i + '"></div>'
        }
        html += "</div>";
    }
    grid = document.getElementById("grid");
    grid.innerHTML = html;
    hoverEffect();
}

initializeGrid();
document.getElementById("button").addEventListener("click", createGrid);

function hoverEffect(){
    let squares = document.getElementsByClassName("square");
    for(let i=0; i<squares.length; i++){
        squares[i].addEventListener('mouseover', function handleHover() {
            squares[i].style.backgroundColor = 'black';
        });
    }
    
}