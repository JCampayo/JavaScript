document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('[data-cell]');
    
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });
    
    
});

// Empezamos en X
var ultimaX = false;
var ultima0 = true;

// Event listener para el botón de reiniciar
document.getElementById("reiniciar").addEventListener('click', function(){ reiniciarTablero()});

function reiniciarTablero() {
    var cells = document.querySelectorAll('[data-cell]');
    ultimaX = false;
    ultima0 = true;
    cells.forEach(cell => {
        cell.textContent = "";
    }); 
}


function handleClick(event) {
    let clickedCell = event.target;
    console.log('Texto:'+ clickedCell.innerText);
    console.log('Celda clicada:', clickedCell);
    
    ponerMarca(clickedCell);

    // Compruebo si se ha llenado todo el tablero
    // añado un timer para que tarde unos milisegundos en hacerse y de tiempo a dibujarse la marca
    if (comprobarVictoria()){
        setTimeout(function() {
            alert("Has ganado");
            rei
        }, 10);
    }
    else if (comprobarEmpate()){
        setTimeout(function() {
            alert("Habéis empatado");
        }, 10);
    }

}


function ponerMarca(clickedCell) {

    celda = clickedCell;

    // Aplicar estilos a la celda clicada
    celda.style.color = 'blue'; // Color azul oscuro
    celda.style.fontWeight = 'bold'; // Texto en negrita

    if (!ultimaX){
        // Pongo la ultima marca 0 en false y la x en true
        ultimaX = true;
        ultima0 = false;
        
        celda.innerText = "X";
    }
    else{
        // Pongo la ultima marca 0 en false y la x en true
        ultimaX = false;
        ultima0 = true;
        
        celda.innerText = "0";

    }
    
}

function comprobarEmpate() {
    // Recorro todas las celdas y compruebo si tiene texto
    let cells = document.querySelectorAll('[data-cell]');
    // Doy por hecho que se ha llenado todo
    let contadorVacio = 0;

for (let index = 0; index < cells.length; index++) {
    console.log(cells[index].innerText);
    if (cells[index].textContent === ""){
        contadorVacio++;
    }
}

if (contadorVacio == 0) {
    return true;
}
else{return false;}

}

function comprobarVictoria() {
    const cells = document.querySelectorAll('[data-cell]');
    const tableros = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    let victoria = false;
    tableros.forEach(tablero => {
        const [a, b, c] = tablero;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            victoria = true;
        }
    });

    return victoria;
}
