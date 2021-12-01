function megaStringArray(array_parking) {
    var array_con_objetos = array_parking
    var array_milenario = []
    var partearray = []
    for (i in array_con_objetos) {
        if (i == 0) {
            partearray = String("Datos del parking")
            array_milenario.push(partearray)
        }
        else {
            var nombretipo = ""
            var objeto_vehiculo = array_con_objetos[i];
            var nombre_vehiculo = objeto_vehiculo.nombre_vehiculo
            var id_vehiculo = objeto_vehiculo.id_vehiculo
            var tipo_vehiculo = objeto_vehiculo.tipo_vehiculo
            if (tipo_vehiculo == 1) { nombretipo = "coche" }
            else if (tipo_vehiculo == 2) { nombretipo = "camión" }
            partearray = String("\nEn la plaza nº" + i + " se encuentra aparcado el " + nombretipo + " " + nombre_vehiculo + " con ID " + id_vehiculo)
            array_milenario.push(partearray)
        }
    }
    var string_milenaria = array_milenario.toString();
    return string_milenaria;
}
