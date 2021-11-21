/**
 * Función para menú de usuario para incorporar cosas a un array
 * @type {Array} frankenArray - Array que se irá completando con nuevos datos
 * 
 */
function usermenu(mainarray) {
    var frankenArray = mainarray
    var isMenu = true //variable para que muestre el menu si activa
    alert("Bienvenido al programa de creación de arrays.")
    while (isMenu) {
        var menusito = prompt("Que quiere hacer, honorable caballero\n 1. Añadir un nuevo dato al array\n 2. Comprobar datos actuales del array\n 3. Pirarse cual conde Dracula")
        switch (menusito) { //switch case para las opciones del menú
            case "1":
                anhadearray(frankenArray)
                break
            case "2":
                alert(frankenArray)
                break
            case "3":
                alert("Vayase señor vampirez")
                var isMenu = false //ponerlo false para salir del bucle del menú
                break
            default:
                alert("Excepción no controlada. Muy mal")
        }
    }
}