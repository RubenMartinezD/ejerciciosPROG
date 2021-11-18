/**
    * comprobar si el usuario acierta el número aleatorio
    * @param {number} numerousr - Es el dinero dado de antes por el usuario
    * @type {string} numerotarget - Es el número aleatorio que el usuario tendrá que adivinar
    * @returns {string} resultado - Frase con el resultado
*/
function determinarandom(numerousr) {
    var numerousr = numerousr
    var numerotarget
    numerotarget = (Math.floor(Math.random() * 101))
    var resultado
    if (numerousr == numerotarget) { resultado = alert("Pues acertaste, campeón") }
    else { resultado = alert("Fallaste, mandril") }
    return resultado
}