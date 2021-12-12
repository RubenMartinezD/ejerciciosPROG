function generarLiga(array_equipos) {
    var lista_equipos = array_equipos
    var deporte = "inflar globos"
    var Liga = function (lista_equipos, deporte) {
        Liga.prototype.lista_equipos = lista_equipos
        Liga.prototype.deporte = deporte
    }
    var liga = new Liga(lista_equipos, deporte)
    return liga
}