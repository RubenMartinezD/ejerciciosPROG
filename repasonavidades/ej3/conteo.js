/**
 * Función para convertir un string en valores individuales en un array
 * @param {string} cadena - string de texto origen 
 */
function conteo(cadena) {
    var contadorcillo = 0;
    var variabililla = '';
    var newcadena = cadena.toLowerCase();
    var cadenamin = String(newcadena);
    var arraycadena = cadenamin.split('');
    for (i in arraycadena) {
        variabililla = arraycadena[i];
        if (variabililla == "e" || variabililla == "a" || variabililla == "i" || variabililla == "o" || variabililla == "u") { contadorcillo++ }
    }
    return contadorcillo
}

