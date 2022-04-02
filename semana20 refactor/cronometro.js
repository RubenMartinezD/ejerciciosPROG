function activateStopwatch() {
    let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    var text_stopwatch = document.getElementById("text_stopwatch");
    let int = null;

    document.getElementById('start_stopwatch').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int); // refrescar constantemente el intervalo
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById('stop_stopwatch').addEventListener('click', () => {
        clearInterval(int);
    });

    document.getElementById('flag_stopwatch').addEventListener('click', () => {
        flagTime(miliseconds, seconds, minutes, hours)
    });


    function displayTimer() {
        miliseconds += 10;
        if (miliseconds == 1000) {
            miliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

        text_stopwatch.innerHTML = h + ":" + m + ":" + s;
    }
}

function flagTime(miliseconds, seconds, minutes, hours) {

    var Flag = document.createElement("li");
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    var snapshot_timevalue = document.createTextNode(h + ":" + m + ":" + s + ":" + miliseconds); //añade texto al div creado.
    Flag.appendChild(snapshot_timevalue); // añade el elemento creado y su contenido al DOM


    var HTML_id_insertion = document.getElementById("hidden_stopwatch_tag");
    var HTML_id_stopwatch = document.getElementById("user_defined_times"); //se define el lugar del elemento padre
    HTML_id_stopwatch.insertBefore(Flag, HTML_id_insertion);

}

function createStopwatchInterval() {
    stopwatch_interval = activateStopwatch()
}

function stopIntervalostopwatch() {
    clearInterval(stopwatch_interval);
}