/**
    * Función para determinar si la cifra es divisible entre 5
    * @param {number} dinero - Es el dinero dado de antes por el usuario
    * @returns {number} dinero - El mismo dinero, habiendo comprobado que es múltiplo de 5
*/
function compmultiplo(dinero) {
    if (dinero < 0) {
        alert("Lo sentimos, pero solo operamos con números positivos")
        exit
    }
    if ((dinero % 5) !== 0) {
        alert("Lo sentimos, pero solo operamos en múltiplos de 5. Inténtelo de nuevo")
        exit
    }
    else
        return dinero
}
