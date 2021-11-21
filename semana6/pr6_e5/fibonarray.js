/**
 * Función para rellenar datos random en un array
 * @returns {array} orderArray - Array de fibonacci
 * @type {number} numerodatos- numero de slots de datos que tendrá el array, entre 8 y 15
 */
function fibonarray(orderarray) {
    var orderArray = orderarray  // Asignación
    var numerodatos = 20
    var numerilloFibo1 = 0   //Primer sumando de fibonacci
    var numerilloFibo2 = 1   //Segundo sumando de fibonacci
    for (var i = 1; i <= numerodatos; i++) {
        orderArray.push(numerilloFibo1)  // meter en el array el núemro random generado                       
        var sumandito = Math.floor(numerilloFibo1 + numerilloFibo2)  //Generar suma de Fibonacci
        numerilloFibo1 = numerilloFibo2  //Desplazar las variables de la suma
        numerilloFibo2 = sumandito       //Desplazar las variables de la suma
    }
    orderArray.sort(function (a, b) { return a - b })   //Ordena los números. Sacado de stack overflow
    return orderArray
}
