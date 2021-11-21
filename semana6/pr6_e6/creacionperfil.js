/**
    * Función que recoge parámetros de usuario y permite cambiarlos
    * @param {string} nombre_inicial - Es el nombre dado de antes por el usuario
    * @param {string} apellido_inicial - Es el apellido dado de antes por el usuario
    * @param {string} direccion_inicial - Es la dirección dada de antes por el usuario
    * @param {string} email_inicial - Es el email dado de antes por el usuario
    * @param {number} telefono_inicial - Es el teléfono dado de antes por el usuario
    * @type {string} nombrefinal- es el nombre definitivo que se mostrará al usuario
    * @type {string} apellidofinal- es el apellido definitivo que se mostrará al usuario
    * @type {string} direccionfinal- es la dirección definitiva que se mostrará al usuario
    * @type {string} emailfinal- es el email definitivo que se mostrará al usuario
    * @type {number} telefonofinal- es el telefono definitivo que se mostrará al usuario
    * @type {object} perfil - objeto con los datos de perfil de un usuario
    * @returns {object} listadatos - tendrá dentro un objeto perfil, creado con las variables declaradas anteriormente con los datos del usuario
*/
function perfilinicial(nombre_inicial, apellido_inicial, direccion_inicial, email_inicial, telefono_inicial) {// Coger parámetros iniciales metidos por el usuario en las funciones enlazadas a main.js
    var nombrefinal = nombre_inicial
    var apellidofinal = apellido_inicial
    var direccionfinal = direccion_inicial  //asignar los valores introducidos por el usuario a variables en esta función
    var emailfinal = email_inicial
    var telefonofinal = telefono_inicial
    /**función para creación de objeto perfil que necesitará cinco variables de entrada. Los parámetros de entrada serán agregados como atributos del objeto perfil creado.
     * @param {string} nombre 
     * @param {string} apellidos 
     * @param {string} direccion 
     * @param {string} email 
     * @param {number} telefono 
     */
    var perfil = function (nombre, apellidos, direccion, email, telefono) { //
        this.nombre = nombre
        this.apellidos = apellidos
        this.direccion = direccion
        this.email = email
        this.telefono = telefono
    }
    var listadatos = new perfil(nombrefinal, apellidofinal, direccionfinal, emailfinal, telefonofinal)
}