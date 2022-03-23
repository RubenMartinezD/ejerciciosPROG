function activarCronometro() {
    let [milisegundos, segundos, minutos, hora] = [0, 0, 0, 0];
    var text_cronometro = document.getElementById("text_cronometro");
    let int = null;

    document.getElementById('start_cronometro').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int); // refrescar constantemente el intervalo
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById('parar_cronometro').addEventListener('click', () => {
        clearInterval(int);
    });

    document.getElementById('flag_cronometro').addEventListener('click', () => {
        flagTiempo(milisegundos, segundos, minutos, hora)
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
                    hora++;
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

function flagTiempo(milisegundos, segundos, minutos, hora) {

    var Flag = document.createElement("li");
    var pantallazo_tiempo = document.createTextNode(hora + ":" + minutos + ":" + segundos + ":" + milisegundos); //añade texto al div creado.
    Flag.appendChild(pantallazo_tiempo); // añade el elemento creado y su contenido al DOM


    var lugar_insercion = document.getElementById("etiquita_tiempos");
    var lugar_cronometro = document.getElementById("tiempos_parciales"); //se define el lugar del elemento padre
    lugar_cronometro.insertBefore(Flag, lugar_insercion);

}

function crearIntervaloCronometro() {
    intervalo_cronometro = activarCronometro()
}

function stopIntervaloCronometro() {
    clearInterval(intervalo_cronometro);
}