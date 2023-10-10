let createGrid = function() {
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
}

document.getElementById("body").addEventListener("load", createGrid());
hoverEffect();

function hoverEffect(){
    let squares = document.getElementsByClassName("square");
    for(let i=0; i<squares.length; i++){
        squares[i].addEventListener('mouseover', function handleHover() {
            squares[i].style.backgroundColor = 'black';
        });
    }
    
}