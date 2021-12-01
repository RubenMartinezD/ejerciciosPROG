function decidirsicocheocamion() {
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