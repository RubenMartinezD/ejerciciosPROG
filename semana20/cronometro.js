function activarCronometro() {
    let [milisegundos, segundos, minutos, hora] = [0, 0, 0, 0];
    var text_cronometro = document.getElementById("text_cronometro");
    let int = null;

    document.getElementById('start_cronometro').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    });
    document.getElementById('parar_cronometro').addEventListener('click', () => {
        clearInterval(int);
    });


    function displayTimer() {
        milisegundos += 10;
        if (milisegundos == 1000) {
            milisegundos = 0;
            segundos++;
            if (segundos == 60) {
                segundos = 0;
                minutos++;
                if (minutos == 60) {
                    minutos = 0;
                    horas++;
                }
            }
        }

        let h = hora < 10 ? "0" + hora : hora;
        let m = minutos < 10 ? "0" + minutos : minutos;
        let s = segundos < 10 ? "0" + segundos : segundos;
        let ms = milisegundos < 10 ? "00" + milisegundos : milisegundos < 100 ? "0" + milisegundos : milisegundos;

        text_cronometro.innerHTML = h + ":" + m + ":" + s;
    }
}


function crearIntervaloCronometro() {
    intervalo_cronometro = activarCronometro()
}

function stopIntervaloCronometro() {
    clearInterval(intervalo_cronometro);
}