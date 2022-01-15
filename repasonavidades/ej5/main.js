/**
    * Función principal
*/
function main() {
    var nom_usuario = prompt("Dame tu nombre porfi")
    var contrasena_inicial = prompt("Dame tu contraseña porfi")
    alert("AHA! Has sido hackiado y debes escribir correctamente tu nombre y contraseña")
    var contador = true
    while (contador) {
        var renom_usuario = prompt("¿Que nombre fue escrito?")
        var contrasena_final = prompt("¿Que contraseña fue escrita?")
        if ((nom_usuario !== renom_usuario) && (contrasena_inicial !== contrasena_final)) {
            alert("MEEEEEEC. Datos incorrectos")
        }
        else if (nom_usuario !== renom_usuario) {
            alert("MEEEEEEC. Nombre incorrecto")
        }
        else if (contrasena_inicial !== contrasena_final) {
            alert("MEEEEEEC. Contraseña incorrecta")
        }
        else {
            alert("Congraturation!!! You have completed a great game.");
            contador = false;
        }
    }
}
main()  