/*
Reset se crea aquí por ser una función específica, pues hará que los valores de los relojes vuelvan a por defecto
*/
function reset() {
    const getCurrentDate = new Date();
    document.getElementById("text_clock").innerHTML = getCurrentDate.getHours() + ":" + getCurrentDate.getMinutes() + ":" + getCurrentDate.getSeconds();
    document.getElementById("text_stopwatch").innerHTML = "00:00:00";
    document.getElementById("text_timer").innerHTML = "00:00:00";
}

/*
Permite crear el evento que muestre el primer argumento y oculte los otros dos
*/
function activationEvent(show, hide1, hide2) {
    var div_show, div_hide1, div_hide2;

    div_show = document.getElementById(show.id.split("_")[1]);
    div_hide1 = document.getElementById(hide1.id.split("_")[1]);
    div_hide2 = document.getElementById(hide2.id.split("_")[1]);
    //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
    //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
    show.addEventListener("click", () => {
        reset();
        div_show.hidden = false;
        div_hide1.hidden = true;
        div_hide2.hidden = true;
    });

}

/* 
Función para establecer la funcionalidad de los botones
*/
function buttons() {
    var activate_clock, activate_stopwatch, activate_timer;
    activate_clock = document.getElementById("activate_clock");
    activate_stopwatch = document.getElementById("activate_stopwatch");
    activate_timer = document.getElementById("activate_timer");
    activationEvent(activate_clock, activate_stopwatch, activate_timer);
    activationEvent(activate_stopwatch, activate_clock, activate_timer);
    activationEvent(activate_timer, activate_stopwatch, activate_clock);
}

function main() {

    preload(); //preload debe ser una función puramente gráfica, no funcional generalmente
    reset();
    buttons();

    //Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
    //Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

    window.clock_interval = null;
    window.stopwatch_interval = null;
    window.timer_interval = null;

    //AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS

    createClockInterval(); //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso
    createStopwatchInterval();
    createTimerInterval();
}

main();