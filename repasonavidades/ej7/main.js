/**
    * Función principal
*/
function main() {
    var menu = true
    while (menu) {
        var preguntamenu = prompt("¿Quieres realizar el ejercicio?")
        if (preguntamenu == "si" || preguntamenu == "Si" || preguntamenu == "SI") {
            var palabra = prompt("Dame una palabrota")
            var longitud = parseInt(palabra.length)
            longitud = longitud - 1
            var arbalap = []
            for (i = longitud; i >= 0; i--) {
                arbalap.push(palabra[i])
            }
            alert("Tu palabra al revés es " + arbalap)
        }
        else {
            alert("Pues hasta nunqui")
            menu = false
        }
    }
}
main()  