function creatablero() {
    var tablero = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    var salida = "";
    for (var i = 0; i < tablero.length; i++) {
        for (var j = 0; j < tablero[i].length; j++) {
            salida = salida + tablero[i][j] + " "
        } salida = salida + "\n";
    }
    console.log(salida);
    return tablero






}