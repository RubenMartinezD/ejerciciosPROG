/**
* Función principal
* @type {numerousr} numerousr - Numero introducido por el usuario
*/
function main() {
    var numerorandom = determinarandom()
    var numerousr = 0
    for (var contador = 5; contador > 0; contador--) {
        var resultado = false
        var numerousr = dimenumero()
        resultado = comprobarandom(numerorandom, numerousr, contador)
        if (resultado) { break }
    }
    preguntavolver()
}
main()
