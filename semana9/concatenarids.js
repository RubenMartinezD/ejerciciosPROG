/**
 * Función para crear un código de partido en base a los equipos que juegan
 * @param {string} id_equipo1 - ID del primer equipo
 * @param {string} id_equipo2 - ID del segundo equipo
 * @returns {string} id_concatenados -- Los IDs de los equipos concatenados en un intento por crear un código de partido único
 */
function concatenarIds(equipo1, equipo2) {
    var id_concatenados = ""
    var id1 = String(equipo1.id_equipo)
    var id2 = String(equipo2.id_equipo)
    idA = parseInt(id1)   // Convertir las ID a número solamente para compararlas
    idB = parseInt(id2)
    if (idA > idB) {
        id_concatenados = id2 + id1   // insertar en id_concatenados las ID en forma de cadenas de texto
    }
    else { id_concatenados = id1 + id2 }
    var cosa = String(id_concatenados)
    if (cosa.includes("undefined")) { console.log("Esto no me va") }
    else { return cosa }
}