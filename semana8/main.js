/**
    * Función principal con el menú del parking
*/
function main() {
    var menusito = true
    var array_parking = [0]  //Inicializamos el array del parking. Cada hueco del array es una plaza de parking
    while (menusito) {
        var menuparking = prompt("Bienvenido al servicio automático de depósito en parkings. No hay nada de lo que preocuparse, continue. Las opciones son:\n1.Introducir vehículo\n2.Liberar vehículo\n3.Comprobar estado del parking\n4.Salir del sistema")
        switch (menuparking) {
            case "1":
                var nuevo_vehiculo = generarvehiculo();  //generamos un objeto vehículo
                if (nuevo_vehiculo.tipo_vehiculo == 1) {  // Si es un coche lo introducimos en un slot del parking
                    array_parking.push(nuevo_vehiculo);
                }
                else if (nuevo_vehiculo.tipo_vehiculo == 2) {  //Introducir dos veces si es un camión, para que pueda ocupar dos slots del parking
                    array_parking.push(nuevo_vehiculo);
                    array_parking.push(nuevo_vehiculo);
                }
                break
            case "2":
                var idABorrar = prompt("Dígame la ID de su vehículo para que lo podamos extraer del parking")
                for (i in array_parking) {
                    var vehiculo_encontrado = array_parking[i]
                    var id_del_vehiculo = parseInt(vehiculo_encontrado.id_vehiculo)
                    var tipo_vehiculo_encontrado = parseInt(vehiculo_encontrado.tipo_vehiculo)
                    if (id_del_vehiculo == idABorrar) {
                        if (tipo_vehiculo_encontrado == 1) {
                            array_parking.splice(i, 1)
                        }
                        else if (tipo_vehiculo_encontrado == 2) {
                            array_parking.splice(i, 2)
                        }
                    }
                }
                break
            case "3":
                var estado_parking = megaStringArray(array_parking)
                alert(estado_parking)
                break
            case "4":
                console.log("Hasta luego. No se preocupe, no le echaremos de menos");
                menusito = false
                break
            default:
                alert("Excepción no controlada. Terrible, apocalíptico")
                break
        }

    }
}
main()  