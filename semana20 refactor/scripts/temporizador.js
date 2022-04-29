function activateTimer() {
    let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    var text_timer = document.getElementById("text_timer");
    let int = null;

    //eventos para seleccionar hourss, minutes y seconds y conservar los valores en las variables y el HTML

    document.getElementById('timer_hours').addEventListener('change', (event) => {
        var selected_hour = event.target.value
        console.log("nueva hora: " + selected_hour)
        hours = selected_hour
        displayTimerHTML()
    });

    document.getElementById('timer_minutes').addEventListener('change', (event) => {
        var selected_minute = event.target.value
        console.log("nuevos min: " + selected_minute)
        minutes = selected_minute
        displayTimerHTML()
    });

    document.getElementById('timer_seconds').addEventListener('change', (event) => {
        var selected_second = event.target.value
        console.log("nuevos segundos: " + selected_second)
        seconds = selected_second
        displayTimerHTML()
    });

    //eventos del timer

    document.getElementById('start_timer').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int); // refrescar constantemente el intervalo
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById('stop_timer').addEventListener('click', () => {
        clearInterval(int);
    });

    document.getElementById('restart_timer').addEventListener('click', () => {
        clearInterval(int);
        miliseconds = 0
        seconds = 0
        minutes = 0
        hours = 0
        text_timer.innerHTML = "00:00:00";
    });


    function displayTimer() { // calcular el tiempo de la cuenta atrás
        miliseconds += 10;
        if (hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(int);
            flagtimer();
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

        text_timer.innerHTML = h + ":" + m + ":" + s;

    }
}



function flagtimer() { //mostrar el mensaje de timer acabado
    var Flag = document.createElement("li");
    var end_message = document.createTextNode("Se acabó el timer.")
    Flag.appendChild(end_message);

    var HTML_id_insertion = document.getElementById("hidden_end_tag")
    var HTML_id_timer = document.getElementById("end_message")
    HTML_id_timer.insertBefore(Flag, HTML_id_insertion)
}

function createTimerInterval() {
    timer_interval = activateTimer()
}

function stopTimerInterval() {
    clearInterval(timer_interval)
}