/**
    * Función principal
    * @type {string} mainarray - array devuelto de la creación
*/
function main() {
    var mainarray = crearray()
    var chaosarray = randomarray(mainarray)
    var arraysolopar = pararray(chaosarray)
    var arraysoloimpar = impararray(chaosarray)
    console.log("Array normalito: " + chaosarray)
    console.log("Array par: " + arraysolopar)
    console.log("Array impar: " + arraysoloimpar)
}
main()  