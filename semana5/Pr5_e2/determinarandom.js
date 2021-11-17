/**
    * comprobar si el usuario acierta el número aleatorio
    * @param {number} numerousr - Es el dinero dado de antes por el usuario
    * resultado - Frase con el resultado
    * @returns {string} 
*/


function determinarandom(numerousr) {
    var numerousr = numerousr
    /**     
    * número generado al azar que el usuario intentará adivinar
    * @type {numerotarget} - 
    */
    var numerotarget
    numerotarget = (Math.floor(Math.random() * 101))
    var resultado
    if (numerousr == numerotarget) { resultado = alert("Pues acertaste, campeón") }
    else { resultado = alert("Fallaste, mandril") }
    return resultado
}