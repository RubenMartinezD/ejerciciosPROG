/**
 * Función para crear una liga de deportes
 * @param {Array
 * } array_equipos - array con los datos de todos los equipos participantes
 * @returns 
 */

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