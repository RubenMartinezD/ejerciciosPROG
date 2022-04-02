function activateClock() {
    var text_clock = document.getElementById("text_clock");
    const getCurrentDate = new Date();
    var hours = getCurrentDate.getHours();
    var minutes = getCurrentDate.getMinutes();
    var seconds = getCurrentDate.getSeconds();
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    text_clock.innerHTML = h + ":" + m + ":" + s;

}

function createClockInterval() {
    clock_interval = setInterval(activateClock, 1000);
}

function stopClockInterval() {
    clearInterval(clock_interval);
}