/**
    * comprobar si el usuario acierta el número aleatorio
    * @param { number } numerorandom - Es el número aleatrorio generado antes
    * @param { number } numerousr - Es el dinero dado de antes por el usuario
    * @param { number } contador - Son los intentos que le quedan al usuario
    * @type {string} numerotarget - Es el número aleatorio que el usuario tendrá que adivinar
    * @returns {boolean} resultado - Si acertó o no
*/
function comprobarandom(numerorandom, numerousr, contador) {
    var fraseresultado = ""
    alert("Te quedan " + contador + " intentos")
    if (numerousr == numerorandom) { fraseresultado = alert("Pues acertaste, campeón"); resultado = true }
    else if (numerousr > numerorandom) { fraseresultado = alert("Fallaste, mandril. Era más pequeño"); resultado = false }
    else { fraseresultado = alert("Fallaste, macaco. Era más grande"); resultado = false }
    fraseresultado
    return resultado
}