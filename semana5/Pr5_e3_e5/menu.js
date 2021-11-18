/** 
    * Función que coge el objeto perfil creado anteriormente y emplea sus datos en un menú
    * @param {object} objeto_perfil Perfil de usuario creado en creacionperfil.js
    * @type {object} perfil - Variable donde se introducirá el objeto_perfil. Así se puede cambiar cada dato individualmente
    * @type {boolean} mostrarmenu - Para seguir mostrando el menú en bucle si true
    * @type {string} menusito - Menú del usuario
    * @type {string} cambiovariable - Para cuando el usuario quiera cambiar un dato en concreto
    * @type {object} perfilmostrado - contiene el objeto Perfil
*/
function menu(objeto_perfil) {
    var perfil = objeto_perfil //
    var mostrarmenu = true //variable para que muestre el menu si activa
    alert("Datos guardados. \nNombre: " + perfil.nombre + "\nApellidos: " + perfil.apellidos + "\nDireccion: " + perfil.direccion + "\nTelefono: " + perfil.telefono + "\nEmail: " + perfil.email)
    //aviso al usuario de los datos que introdujp
    while (mostrarmenu) {
        refrescarhtml(perfil)
        var menusito = prompt("Que quiere hacer, honorable caballero\n 1. Consultar sus datos actuales\n 2. Modificar algún dato erroneo\n 3. Pirarse cual conde Dracula")
        switch (menusito) { //switch case para las opciones del menú
            case "1":
                alert("\nNombre: " + perfil.nombre + "\nApellidos: " + perfil.apellidos + "\nDireccion: " + perfil.direccion + "\nTelefono: " + perfil.telefono + "\nEmail: " + perfil.email)
                break
            case "2":
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