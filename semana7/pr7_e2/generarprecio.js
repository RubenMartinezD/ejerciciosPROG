/**
 * Función para generar un número aleatorio entre dos cifras indicando un precio
 * @param {number} precioMayor - Precio máximo posible
 * @param {number} precioMenor - Precio mínimo posible
 * @returns precioJusto - Precio aleatorio generado
 */
function generarprecio(precioMayor, precioMenor) {
    var precioJusto = Math.floor(Math.random() * (precioMayor - precioMenor + 1)) + precioMenor;
    console.log("El precio generado es de " + precioJusto + " euros");  //Chuleta de respuesta correcta
    return precioJusto;
}