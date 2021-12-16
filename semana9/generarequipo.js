/**
 * Función para generar un Equipo a introducir
 * @param {string} id_equipo - Identificador del equipo de globos, definido por el i dentro de un for
 * @returns equipo - objeto equipo que se usará en la liga
 */
function generarEquipo(id_equipo) {
    var arraynombres = ["", "The Fathers", "Los ángulos obtusos", "Los Casanegra", "Las líneas difusas B", "Los colesteroles", "Los Dialpes", "HDMI Foundation", "Los M.Rajoy", "Las anguilas amorosas Segunda División", "Los microbios gigantes", "Los vecinos tolerables", "Humedad F.C.", "Rayo venezolano compadre basket club", "VLC Traffic Association", "París Saint Clementina", "Dinero gratis F.C.", "Falsa Sociedad", "Hueco abierto Fútbol Sala", "Cocineros galleta metralleta", "Orfanato Marco F.C.", "La familia Yoestrella", "Los juegos rusheados Alevines"]
    var nombre_establecido = arraynombres[id_equipo]   //asignamos el nombre de equipo según el array de nombres
    var Equipo = function (nombre_establecido, id_equipo) {
        Equipo.prototype.id_equipo = id_equipo + 10     // le sumamos 10 para evitar líos después con los códigos de partido
        Equipo.prototype.nombre_equipo = nombre_establecido
        Equipo.prototype.globos_hinchados = 0
        Equipo.prototype.puntos = 0
        Equipo.prototype.partidos_jugados = 0
        Equipo.prototype.victorias = 0
        Equipo.prototype.derrotas = 0
        Equipo.prototype.empates = 0
    }
    var equipo = new Equipo(nombre_establecido, id_equipo)
    return equipo
}