/**
    * Función para preguntar al usuario si lo quiere volver a intentar
    * @type {string} pregunta - Para que el usuario introduzca s "Sí", o n "No" 
    * @type {boolean}  respuesta - true: repetir, false: salir
    * 
*/
function preguntavolver() {
    var pregunta = prompt("Quieres volver a intentarlo?\n s - Si\n n - no")
    if (pregunta == "s") { var respuesta = true }
    else if (pregunta == "n") { var respuesta = false }
    if (respuesta) { main() }
    else if (!respuesta) { alert("Pues hasta luego") }
}