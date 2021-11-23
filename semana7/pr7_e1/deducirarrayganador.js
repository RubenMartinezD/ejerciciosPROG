/**
 * Función para que el usuario juegue a adivinar el número
 * @param {array} arrayGanador - array con la combinación ganadora
 */
function deducirArrayGanador(arrayGanador) {
    var arrayGanadorParaDeducir = arrayGanador
    var arrayPerfecto = []      // Generador de array perfecto para ser comparado
    for (i = 0; i < 5; i++) {
        arrayPerfecto.push("O")
    }
    var combinacionRespondida = prompt('Dígame una combinacioncilla de 5 cifras para ver si adivinaste')
    for (var intentosRestantes = 9; intentosRestantes > 0; intentosRestantes--) {
        var arrayRespuesta = desgranarEnArray(combinacionRespondida)   //convertir el string dado por el usuario en un array
        var arraySimbolitos = []    //array vacío que será rellenado por los símbolos según como acierte el usuario
        for (i in arrayGanadorParaDeducir) {
            var arrayGanadorCifraConcreta = parseInt(arrayGanadorParaDeducir[i])  //convertir los valores del array en números porque si no, no deja igualar
            var arrayRespuestaCifraConcreta = parseInt(arrayRespuesta[i])
            if (arrayGanadorCifraConcreta == arrayRespuestaCifraConcreta) {
                arraySimbolitos.push("O")
            }
            else if (arrayGanadorParaDeducir.includes(arrayRespuestaCifraConcreta)) {
                arraySimbolitos.push("X")
            }
            else { arraySimbolitos.push("-") }
        }
        var isEqual = arraySimbolitos.toString() === arrayPerfecto.toString();     //Importantísmo hacer esto para no pasarse una hora atascado en el ejercicio porque Javascript no iguala dos arrays idénticos
        if (isEqual) {
            alert(arraySimbolitos + "\nEnhorabuena, acertaste el numerito")
            intentosRestantes = 0
            break
        }
        else { combinacionRespondida = prompt("Lo siento muchísichisimo. Inténtelo otra vez. Le quedan " + intentosRestantes + " intentos.\n" + arraySimbolitos) }
    }
}