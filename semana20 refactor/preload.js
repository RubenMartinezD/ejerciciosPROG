/*
  Esta función sirve para hacer la precarga de la página, ocultando los apartados que no son necesarios o cargando los que si
*/
function preload() {
    hidUnused();
    timerSelectors();
}

function hidUnused() {
    //Variables para almacenar los elementos HTML
    var clock, stopwatch, timer;
    clock = document.getElementById("clock");
    stopwatch = document.getElementById("stopwatch");
    timer = document.getElementById("timer");

    //Variables para comprobar que elementos deben ocultarse o si es la primera vez que se inicia
    var isClock, isStopwatch, isTimer;
    isClock = localStorage.getItem("isClock");
    isStopwatch = localStorage.getItem("isStopwatch");
    isTimer = localStorage.getItem("isTimer");

    if (isClock == null && isStopwatch == null && isTimer == null) {
        isClock = 1;
        isStopwatch = 0;
        isTimer = 0;
        localStorage.setItem("isClock", isClock);
        localStorage.setItem("isStopwatch", isStopwatch);
        localStorage.setItem("isTimer", isTimer);
    }

    if (isClock != 1) {
        clock.hidden = true;
    } else {
        clock.hidden = false;
    }
    if (isStopwatch != 1) {
        stopwatch.hidden = true;
    } else {
        stopwatch.hidden = false;
    }
    if (isTimer != 1) {
        timer.hidden = true;
    } else {
        timer.hidden = false;
    }
}

function timerSelectors() {
    var timer_hours = document.getElementById("timer_hours");
    for (var i = 0; i <= 24; i++) {
        var option = new Option(i, i, false, false);
        timer_hours.appendChild(option);
    }
    var timer_minutes = document.getElementById("timer_minutes");
    for (var i = 0; i <= 60; i++) {
        var option = new Option(i, i, false, false);
        timer_minutes.appendChild(option);
    }
    var timer_seconds = document.getElementById("timer_seconds");
    for (var i = 0; i <= 60; i++) {
        var option = new Option(i, i, false, false);
        timer_seconds.appendChild(option);
    }
}