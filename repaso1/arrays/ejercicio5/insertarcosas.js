function insertarCosas(tablero_a_insertar) {
    var tablero = tablero_a_insertar;
    var mostrarmenu = true
    var cosa = true
    var cosainsertar = "O"
    while (mostrarmenu == true) {
        var salida = "";
        var comprobacosa = prompt("Se van a insertar " + cosainsertar + "\n Si quieres cambiar de forma, escribe algo. Si no, continua sin escribir")
        if (comprobacosa == "") { } else { cosa = false }
        if (cosa) {
            cosainsertar = "O"
        }
        else { cosainsertar = "X" }
        var valorfila = parseInt(prompt("Insertando " + cosainsertar + "\n¿En qué fila lo quieres insertar?"))
        var valorcolumna = parseInt(prompt("Insertando " + cosainsertar + "\n¿En qué columna lo quieres insertar?"))
        valorfila = valorfila - 1
        valorcolumna = valorcolumna - 1
        tablero[valorfila][valorcolumna] = cosainsertar
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                salida = salida + tablero[i][j] + " "
            } salida = salida + "\n";
        }
        alert("El resultado es el siguiente: \n" + salida)
        var pregunntita = prompt("¿Quieres intentarlo de nuevo?")
        if (pregunntita == "no" | "No" | "NO") {
            mostrarmenu = false;
            alert("Pues hasta luegote")
        }
    }

}