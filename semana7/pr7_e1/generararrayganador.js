/**
 * Función para generar un el array correcto
 * @returns arrayCorrecto - el array con la combinación ganadora 
 */
function generarArrayCorrecto() {
    var arrayCorrecto = [] //array donde se introducirá la combinación ganadora
    for (i = 0; i < 5; i++) {
        var inyectarVariableArray = Math.floor(Math.random() * 9); //Inyectar una cifra al azar en el array
        arrayCorrecto.push(inyectarVariableArray)
    }
    console.log("El array ganador es " + arrayCorrecto);
    return arrayCorrecto
}