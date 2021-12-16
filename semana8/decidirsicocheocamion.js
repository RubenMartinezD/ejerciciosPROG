/**
 * Función para que el usuario decida si A o si B
 * @returns cocheocamion - que viene siendo A o B
 * 
 */
function decidirsicocheocamion() {
    var decision = false
    do {
        var cocheocamion = prompt("Escribe 1 si quieres introducir un coche o 2 si quieres introducir un camión");
        if (cocheocamion == 1) {
            decision = true;
            return cocheocamion;
        }
        else if (cocheocamion == 2) {
            decision = true;
            return cocheocamion;
        }
    } while (!decision)
}