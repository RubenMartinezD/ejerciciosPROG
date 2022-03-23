function activarTemporizador() {
    let [milisegundos, segundos, minutos, hora] = [0, 5, 0, 0];
    var text_temporizador = document.getElementById("text_temporizador");
    let int = null;

    document.getElementById('start_temporizador').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int); // refrescar constantemente el intervalo
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById('stop_temporizador').addEventListener('click', () => {
        clearInterval(int);
    });

    function displayTimer() {
        milisegundos += 10;
        if (hora == 0 && minutos == 0 && segundos == 0) {
            clearInterval(int);
            flagTemporizador();
        }
        console.log(milisegundos)
        if (milisegundos == 1000) {
            milisegundos = 0;
            segundos--;
            if (segundos == -1) {
                segundos = 59;
                minutos--;
                if (minutos == -1) {
                    minutos = 59;
                    hora--;
                }
            }

        }
        let h = hora < 10 ? "0" + hora : hora;
        let m = minutos < 10 ? "0" + minutos : minutos;
        let s = segundos < 10 ? "0" + segundos : segundos;
        let ms = milisegundos < 10 ? "00" + milisegundos : milisegundos < 100 ? "0" + milisegundos : milisegundos;

        text_temporizador.innerHTML = h + ":" + m + ":" + s;

    }
}

function flagTemporizador() {
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