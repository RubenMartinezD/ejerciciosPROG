/**
 * Función para añadir un dato supuestamente relevante a un array
 * @returns {array} arraycinho - Array con el dato actualizado
 */
function anhadearray(array) {
    var arraycinho = array
    var nuevodato = prompt("¿Qué dato querrá añadir a su array?")
    arraycinho.push(nuevodato)
    return arraycinho
}

