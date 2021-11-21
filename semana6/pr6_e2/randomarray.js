/**
 * Función para rellenar datos random en un array
 * @returns {array} chaosArray - Array caótico con los números aleatorios introducidos
 * @type {number} numerodatos- numero de slots de datos que tendrá el array, entre 8 y 15
 */
function randomarray(chaosarray) {
    var chaosArray = chaosarray  // Asignación
    var numerodatos = Math.floor(Math.random() * 15);
    for (var i = 1; i <= numerodatos; i++) {
        var inserti = Math.floor(Math.random() * 101);   //Insertar un número entre 1 y 100 en los slots del array
        chaosArray.push(inserti)  // meter en el array el núemro random generado
    }
    return chaosArray
}
