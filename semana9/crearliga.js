/**
 * Función para crear una liga de deportes
 * @param {Array} array_equipos - array con los datos de todos los equipos participantes
 * @returns liga - nuevo objeto que contiene los datos para crear una liga de deportes
 */
function generarLiga(array_equipos) {
    var lista_equipos = array_equipos
    var deporte = "inflar globos"  // se define el deporte simplemente por requisito del enunciado
    /**
     * Creación del objeto Liga, que recibirá por parámetro sus datos
     * @param {array} lista_equipos - array con los equipos participantes
     * @param {string} deporte - deporte realizado
     */
    var Liga = function (lista_equipos, deporte) {
        Liga.prototype.lista_equipos = lista_equipos    //definimos los stributos de Liga
        Liga.prototype.deporte = deporte
    }
    var liga = new Liga(lista_equipos, deporte)
    return liga
}