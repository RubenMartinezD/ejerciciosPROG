function activarReloj() {
    var text_reloj = document.getElementById("text_reloj");
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    let h = hora < 10 ? "0" + hora : hora;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    text_reloj.innerHTML = h + ":" + m + ":" + s;

}

function crearIntervaloReloj() {
    intervalo_reloj = setInterval(activarReloj, 1000);
}

function stopIntervaloReloj() {
    clearInterval(intervalo_reloj);
}