
var btnDisplay = document.getElementsByName("display");
var value;
function limpiarResultado() {
    
     btnDisplay = document.getElementsByName("display");
    
    btnDisplay[0].innerHTML = "0";
}

function ponerNumero(valor) {
    
    

    if (btnDisplay[0].innerText === '0' && value !== '.') {
        btnDisplay[0].innerText = valor;
    } else {
        btnDisplay[0].innerText += valor;
    }

}

function calculate() {
    
    try {
        btnDisplay[0].innerText = eval(btnDisplay[0].innerText);
    } catch {
        alert("Error");
    }

}

function eliminarNumero() {
    
    btnDisplay[0].innerText =  btnDisplay[0].innerText.slice(0, -1);

}
