/**
 * Función para generar un Premio para el concurso
 * @returns objeto - objeto 
 */
function generarpremio() {
    var Premio = function (nombre, precioJusto, precioMayor, precioMenor) {
        Premio.prototype.nombre = nombre
        Premio.prototype.precioJusto = precioJusto
        Premio.prototype.precioMayor = precioMayor
        Premio.prototype.precioMenor = precioMenor
    }
    var idpremio = Math.floor(Math.random() * 4) + 1;  //Id generado aleatoriamente para la extracción de valores en los arrays
    var nombrecosaspremiadas = ["", "Escafandra magnética", "300 metros cuadrados de papel albal", "Bloque de hormigón de 1000 toneladas", "Cheque para una entrada al pozo del pueblo"];
    var valoresPrecioMayor = [0, 700, 150, 1800000, 45];
    var valoresPrecioMenor = [0, 500, 145, 1799990, 40];
    var precioJusto = generarprecio(valoresPrecioMayor[idpremio], valoresPrecioMenor[idpremio])  //insertar en el objeto la variable del precio justo
    var objeto = new Premio(nombrecosaspremiadas[idpremio], precioJusto, valoresPrecioMayor[idpremio], valoresPrecioMenor[idpremio])
    return objeto
}