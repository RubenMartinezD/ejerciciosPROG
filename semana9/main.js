/**
    * Función principal
    * @type {string} mainarray - array devuelto de la creación
*/
function main() {
    array_equipos = ["Lista de participantes:"]
    for (i = 1; i < 23; i++) {
        var nuevo_equipo = generarEquipo(i);
        array_equipos.push(nuevo_equipo)
    }
    var nueva_liga = generarLiga(array_equipos)
    jugarLiga(nueva_liga)
}
main()  