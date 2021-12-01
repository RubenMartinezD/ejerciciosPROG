/**
 * Función para generar un vehiculo a introducir, con una id específica
 * @returns objeto - objeto 
 */
function generarvehiculo() {
    var Vehiculo = function (nombre_vehiculo, tipo_vehiculo, id_vehiculo) {
        Vehiculo.prototype.nombre_vehiculo = nombre_vehiculo
        Vehiculo.prototype.tipo_vehiculo = tipo_vehiculo
        Vehiculo.prototype.id_vehiculo = id_vehiculo
    }
    var nid_vehiculo = Math.floor(Math.random() * 8192) + 1;  //Id generado aleatoriamente para la extracción de valores en los arrays
    var ntipo_vehiculo = decidirsicocheocamion()  // decir si el vehículo es coche o camión
    var nnombre_vehiculo = prompt("Dígame el nombresote de su carrete")
    var vehiculo = new Vehiculo(nnombre_vehiculo, ntipo_vehiculo, nid_vehiculo)
    return vehiculo
}