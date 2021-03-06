/**
    * Función principal
    * @type {string} nombre introducido
    * @type {string} apellidos introducidos
    * @type {string} email introducido
    * @type {string} telefono introducido
    * @type {string} direccion introducida
    * @type {object} perfilmostrado - contiene el objeto Perfil
*/
function main() {
    var nombre = nuevo_nombre()  // funciones para sacar los parámetros mediante prompts
    var apellidos = nuevos_apellidos()
    var email = nuevo_email()
    var telefono = nuevo_tlf()
    var direccion = nueva_direccion()
    var perfilmostrado = perfilinicial(nombre, apellidos, direccion, email, telefono)  //Ejecutar la función perfilinicial mediante los parámetros metidos por el usuario, nos devolverá el objeto perfil dentro de "listadatos"
    menu(perfilmostrado) // Introducir la variable perfilmostrado, que contiene el objeto Perfil, para ejecutar la función menú
}
main()  