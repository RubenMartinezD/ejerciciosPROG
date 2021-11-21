/**
 * Función para sacar los números impares de un array y meterlos en otro array más elitista
 * 
 * @returns {array} arraysoloimpar - 
 */
function impararray(chaosarray) {
    var arraysoloimpar = []
    for (i in chaosarray) {
        leernumero = chaosarray[i]
        if ((leernumero % 2) !== 0) {
            arraysoloimpar.push(leernumero)
        }
    }
    return arraysoloimpar
}