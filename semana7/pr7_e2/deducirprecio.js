/**
 * Función para  mostrar el juego de concurso al usuario
 * @param {object} premioGenerado - objeto Premio generado a partir de los datos de los array
 */
function deducirprecio(premioGenerado) {
    alert("Bienvenido a El Precio Injusto.\n Tienes 3 intentos para deducir el precio de un objeto.")
    for (var intentosRestantes = 3; intentosRestantes > 0; intentosRestantes--) {
        var respuesta = prompt("El objeto de hoy es " + premioGenerado.nombre + " \nEl valor de dicho objeto se encuentra entre los " + premioGenerado.precioMenor + " y los " + premioGenerado.precioMayor + " euros. Te quedan " + intentosRestantes + " intentos")
        if (respuesta == premioGenerado.precioJusto) {
            alert("Enhorabuena, ha acertado y ha ganado un objeto magnífico: este " + premioGenerado.nombre);
            break
        }
        else {
            alert("Lo sentimos, la suerte no ha estado de su lado esta vez");
            if (intentosRestantes == 0) {
                alert("Se le agotaron los intentitos wey"); break
            }
        }
    }
    preguntavolver();
}