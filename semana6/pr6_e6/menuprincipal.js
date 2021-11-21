function menuprincipal() {
    var arrayperfiles = []
    var cantidadperfiles = 0
    var mostrarmenu = true //variable para que muestre el menu si activa
    while (mostrarmenu) {
        var menusito = prompt("Que quiere hacer, honorable caballero\n 1. Crear un perfil desde cero\n 2. Borrar el perfil de la faz de la tierra \n 3. Modificar datos del perfil\n 4. Mostrar datos de perfil\n 5. Mostrar los datos de todos los perfiles\n 6. Salir")
        switch (menusito) { //switch case para las opciones del menú
            case "1":
                if (cantidadperfiles < 5) {
                    var Perfil = crearPerfilDesdeCero()
                    arrayperfiles.push(Perfil)
                    cantidadperfiles++
                }
                else alert("Demasiados perfiles hechos. Borra algunos primero")
                break
            case "2":
                if (cantidadperfiles > 0) {
                    var idperfil = prompt("Selecciona el ID del perfil a borrar")
                    arrayperfiles.remove(idperfil)
                    alert("Perfil borrado")
                    break
                }
                else { alert("Pero si no hay perfiles") }
                break
            case "3":
                var cambiovariable = prompt("Que dato metiste mal?\n 1. Nombre\n2. Apellidos\n3. E-Mail\n4. Telefono\n5. Direccion")
                switch (cambiovariable) {
                    case "1":
                        perfil.nombre = nuevo_nombre()  //volver a llamar la función para introducir el nombre e introducir el nuevo nombre en el atributo nombre del objeto perfil
                        alert("El nombre fue cambiado")
                        break
                    case "2":
                        perfil.apellidos = nuevos_apellidos()
                        alert("Los apellidos fueron cambiados")
                        break
                    case "3":
                        perfil.email = nuevo_email()
                        alert("El email fue cambiado")
                        break
                    case "4":
                        perfil.telefono = nuevo_tlf()
                        alert("El telefono fue cambiado")
                        break
                    case "5":
                        perfil.direccion = nueva_direccion()
                        alert("La dirección fue cambiada")
                        break
                    default:
                        alert("Excepción no controlada. Terrible, apocalítico")
                }
                break
            case "3":
                alert("Vayase señor vampirez")
                mostrarmenu = false  //ponerlo false para salir del bucle del menú
                break
            default:
                alert("Excepción no controlada. Muy mal")
        }


    }
}









