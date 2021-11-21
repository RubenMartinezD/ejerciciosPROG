/**
 * Función para sacar los números pares de un array y meterlos en otro array más elitista
 * 
 * @returns {array} arraysolopar - 
 */
function pararray(chaosarray) {
    var arraysolopar = []
    for (i in chaosarray) {
        leernumero = chaosarray[i]
        if ((leernumero % 2) == 0) {
            arraysolopar.push(leernumero)
        }
    }
    return arraysolopar
}