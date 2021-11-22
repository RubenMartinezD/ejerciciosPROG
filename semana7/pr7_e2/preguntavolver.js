/**
    * Función para preguntar al usuario si lo quiere volver a intentar
    * @type {string} pregunta - Para que el usuario introduzca s "Sí", o n "No" 
    * @type {boolean}  respuesta - true: repetir, false: salir
    * 
*/
function preguntavolver() {
    var pregunta = prompt("Quieres volver a jugar?\n s - Si\n n - no")
    if (pregunta == "s") { main() }
    else if (pregunta == "n") { alert("Pues largo de aquí") }
    else { alert("Pues hasta luego") }
}