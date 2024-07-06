var numero;
var contador = document.getElementById("contador");

function sumarContador() {
    
    if (contador.textContent === 0){

    }

    numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;
    console.log(numero);
    
    

}