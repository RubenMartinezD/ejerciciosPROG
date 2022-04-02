function activarReloj() {
    var text_reloj = document.getElementById("text_reloj");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    text_reloj.innerHTML = h + ":" + m + ":" + s;

}

function crearIntervaloReloj() {
    intervalo_reloj = setInterval(activarReloj, 1000);
}

function stopIntervaloReloj() {
    clearInterval(intervalo_reloj);
}