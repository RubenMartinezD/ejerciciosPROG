/**
    * Función para convertir el dinero introducido en un número
    * @type {string} valordinero - Dinero introducido 
    * @returns {number}  valordinero  - Se devuelve convertido en número
*/

function entradinero() {
    var valordinero = prompt("Introduce la cantidad a retirar")
    valordinero = parseInt(valordinero)
    return valordinero
}
