function activateTimer() {
    var timer_html = new Timer(0, 0, 0, 0)
    var text_timer = document.getElementById("text_timer");
    let int = null;

    //eventos para seleccionar hourss, minutes y seconds y conservar los valores en las variables y el HTML

    document.getElementById('timer_hours').addEventListener('change', (event) => {
        var selected_hour = event.target.value
        console.log("nueva hora: " + selected_hour)
        timer_html.hours = selected_hour
        displayTimerHTML()
    });

    document.getElementById('timer_minutes').addEventListener('change', (event) => {
        var selected_minute = event.target.value
        console.log("nuevos min: " + selected_minute)
        timer_html.minutes = selected_minute
        displayTimerHTML()
    });

    document.getElementById('timer_seconds').addEventListener('change', (event) => {
        var selected_second = event.target.value
        console.log("nuevos segundos: " + selected_second)
        timer_html.seconds = selected_second
        displayTimerHTML()
    });



    //eventos del timer

    document.getElementById('start_timer').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int); // refrescar constantemente el intervalo
        }
        int = setInterval(displayTimer, 10, timer_html);
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




    function displayTimer(timer_html) { // calcular el tiempo de la cuenta atrás
        timer_html.miliseconds += 10;
        if (timer_html.hours == 0 && timer_html.minutes == 0 && timer_html.seconds == 0) {
            clearInterval(int);
            flagtimer();
        }
        if (timer_html.miliseconds == 1000) {
            timer_html.miliseconds = 0;
            timer_html.seconds--;
            if (timer_html.seconds == -1) {
                timer_html.seconds = 59;
                timer_html.minutes--;
                if (timer_html.minutes == -1) {
                    timer_html.minutes = 59;
                    timer_html.hours--;
                }
            }

        }
        displayTimerHTML()
    }

    function displayTimerHTML() { //segunda parte de la función, muestra el tiempo actual en el HTML

        let h = timer_html.hours < 10 ? "0" + timer_html.hours : timer_html.hours;
        let m = timer_html.minutes < 10 ? "0" + timer_html.minutes : timer_html.minutes;
        let s = timer_html.seconds < 10 ? "0" + timer_html.seconds : timer_html.seconds;
        let ms = timer_html.miliseconds < 10 ? "00" + timer_html.miliseconds : timer_html.miliseconds < 100 ? "0" + timer_html.miliseconds : timer_html.miliseconds;

        text_timer.innerHTML = h + ":" + m + ":" + s;

    }

}

function createTimerInterval() {
    timer_interval = activateTimer()
}

function stopTimerInterval() {
    clearInterval(timer_interval)
}

function flagtimer() { //mostrar el mensaje de timer acabado
    var Flag = document.createElement("li");
    var end_message = document.createTextNode("Se acabó el timer.")
    Flag.appendChild(end_message);

    var HTML_id_insertion = document.getElementById("hidden_end_tag")
    var HTML_id_timer = document.getElementById("end_message")
    HTML_id_timer.insertBefore(Flag, HTML_id_insertion)
}