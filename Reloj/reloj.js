
var horas = document.getElementById("hours");
var minutos = document.getElementById('minutes');
var segundos = document.getElementById('seconds');


function actalizarReloj() {
    
    const reloj = new Date();

    const hour = reloj.getHours();
    const minutes = reloj.getMinutes();
    const seconds = reloj.getSeconds();

    horas.textContent = hour;
    minutos.textContent = minutes;
    segundos.textContent = seconds;

    if (segundos.textContent.length == 1){

        segundos.textContent = "0" + segundos.textContent;

    }

    if (minutos.textContent.length == 1){

        minutos.textContent = "0" + minutos.textContent;

    }


    
}

setInterval(actalizarReloj);
actalizarReloj();