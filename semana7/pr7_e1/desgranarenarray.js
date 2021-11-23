/**
 * Función para convertir un número en una cadena de valores de un array
 * @param {number} numeroRecibido - El número a separar en arrays
 * @returns {array} arrayDesgranado - El array con los dígitos separados
 */
function desgranarEnArray(numeroRecibido) {
    var arrayGranado = String(numeroRecibido)
    var arrayDesgranado = arrayGranado.split('')
    return arrayDesgranado
}
