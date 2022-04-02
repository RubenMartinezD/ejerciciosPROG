function activarTemporizador() {
    let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    var text_temporizador = document.getElementById("text_temporizador");
    let int = null;

    //eventos para seleccionar hourss, minutes y seconds y conservar los valores en las variables y el HTML

    document.getElementById('hours_temporizador').addEventListener('change', (event) => {
        var hours_seleccionados = event.target.value
        console.log("nueva hours: " + hours_seleccionados)
        hours = hours_seleccionados
        displayTimerHTML()
    });

    document.getElementById('minutes_temporizador').addEventListener('change', (event) => {
        var minutes_seleccionados = event.target.value
        console.log("nuevos min: " + minutes_seleccionados)
        minutes = minutes_seleccionados
        displayTimerHTML()
    });

    document.getElementById('seconds_temporizador').addEventListener('change', (event) => {
        var seconds_seleccionados = event.target.value
        console.log("nuevos seconds: " + seconds_seleccionados)
        seconds = seconds_seleccionados
        displayTimerHTML()
    });

    //eventos del temporizador

    document.getElementById('start_temporizador').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int); // refrescar constantemente el intervalo
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById('stop_temporizador').addEventListener('click', () => {
        clearInterval(int);
    });

    document.getElementById('restart_temporizador').addEventListener('click', () => {
        clearInterval(int);
        miliseconds = 0
        seconds = 0
        minutes = 0
        hours = 0
        text_temporizador.innerHTML = "00:00:00";
    });


    function displayTimer() { // calcular el tiempo de la cuenta atrás
        miliseconds += 10;
        if (hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(int);
            flagTemporizador();
        }
        if (miliseconds == 1000) {
            miliseconds = 0;
            seconds--;
            if (seconds == -1) {
                seconds = 59;
                minutes--;
                if (minutes == -1) {
                    minutes = 59;
                    hours--;
                }
            }

        }
        displayTimerHTML()
    }

    function displayTimerHTML() { //segunda parte de la función, muestra el tiempo actual en el HTML

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

        text_temporizador.innerHTML = h + ":" + m + ":" + s;

    }
}



function flagTemporizador() { //mostrar el mensaje de temporizador acabado
    var Flag = document.createElement("li");
    var mensaje_fin = document.createTextNode("Se acabó el temporizador.")
    Flag.appendChild(mensaje_fin);

    var lugar_insercion = document.getElementById("etiquita_fin")
    var lugar_padre = document.getElementById("mensaje_fin")
    lugar_padre.insertBefore(Flag, lugar_insercion)
}

function crearIntervaloTemporizador() {
    intervalo_temporizador = activarTemporizador()
}

function stopIntervaloTemporizador() {
    clearInterval(intervalo_temporizador)
}