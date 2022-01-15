/**
    * Función principal
*/
function main() {
    var palabra = prompt("Dame una palabrota")
    var longitud = parseInt(palabra.length)
    longitud = longitud - 1
    var arbalap = []
    for (i = longitud; i >= 0; i--) {
        arbalap.push(palabra[i])
    }
    alert("Tu palabra al revés es " + arbalap)
}
main()  