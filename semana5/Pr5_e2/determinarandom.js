/**
    * generar el número aleatorio
    * @returns {number} numerotarget - Es el número aleatorio que el usuario tendrá que adivinar
*/
function determinarandom() {
    var numerotarget = (Math.floor(Math.random() * 101))
    return numerotarget
}