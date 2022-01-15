/**
 * Función para el cálculo de polinomios de segundo grado
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns 
 */
function calculodivmas(a, b, c) {
    var a = a
    var b = b
    var c = c
    var parte1 = (b * -1);
    var parte2 = (b * b) - (4 * a * c)
    var parte3 = Math.sqrt(parte2);
    resultado = parte1 + parte3;
    return resultado;
}

