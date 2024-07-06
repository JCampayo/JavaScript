const piedra = document.getElementById("0");
const papel = document.getElementById("1");
const tijera = document.getElementById("2");

// Event listener para el botón de piedra
document.getElementById('0').addEventListener('click', function() {
    eleccionUser(piedra.id);
});

// Event listener para el botón de papel
document.getElementById('1').addEventListener('click', function() {
    eleccionUser(papel.id);
});

// Event listener para el botón de tjieras
document.getElementById('2').addEventListener('click', function() {
    eleccionUser(tijera.id);
});

function eleccionPC() {

    return Math.floor(Math.random() * 3).toString();
}

function eleccionUser(eleccion) {
    switch (eleccion) {
        case '0': // piedra
                if (eleccion === eleccionPC()) {
                    alert("HAS EMPATADO EL PC HA ELEGIDO PIEDRA");
                }else if (eleccionPC() === papel.id) {
                    alert("HAS PERDIDO EL PC HA ELEGIDO PAPEL");
                }
                else{ 
                    alert("HAS GANADO EL PC HA ELEGIDO TIJERAS");}
            break;
        
        case '1': // Papel
                if (eleccion === eleccionPC()) {
                    alert("HAS EMPATADO EL PC HA ELEGIDO PAPEL");
                }else if (eleccionPC() === tijera.id) {
                    alert("HAS PERDIDO EL PC HA ELEGIDO TIJERAS");
                }
                else{ alert("HAS GANADO EL PC HA ELEGIDO PIEDRA");}
            break;

        case '2': // tijeras
            if (eleccion === eleccionPC()) {
                alert("HAS EMPATADO EL PC HA ELEGIDO TIJERAS");
            }else if (eleccionPC() === piedra.id) {
                alert("HAS PERDIDO EL PC HA ELEGIDO PIEDRA");
            }
            else{ alert("HAS GANADO EL PC HA ELEGIDO PAPEL");}
        break;
    
        default:
            break;
    }


}
