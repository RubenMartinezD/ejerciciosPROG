/**
    * Función para que se actiualice la información del .html con los datos de usuario metidos a posteriori
    * @param {object} perfil objeto perfil con los datos de usuario
     * @type {string} id_nombre - Variable donde se depositará la id de "nombre" extraida del documento html, para luego poder modificar cambios a esa ID
     * @type {string} id_apellidos
     * @type {string} id_direccion
     * @type {number} id_telefono
     * @type {string} id_email
     */
function refrescarhtml(perfil) {
    var id_nombre = document.getElementById("nombre")
    var id_apellidos = document.getElementById("apellidos")
    var id_email = document.getElementById("email")
    var id_direccion = document.getElementById("direccion")
    var id_telefono = document.getElementById("telefono")
    /**
         * @type {string} nombresote - Variable donde se depositará el valor de nombre extraido del objeto perfil
         * @type {string} apellidote
         * @type {string} emailote
         * @type {number} telefonote
         * @type {string} direccionita
         */
    var nombresote = perfil.nombre
    var apellidote = perfil.apellidos
    var emailote = perfil.email
    var direccionita = perfil.direccion
    var telefonote = perfil.telefono
    //se deposita en el html las variables introducidas por el usuario, guardando así los cambios realizados
    id_nombre.innerHTML = nombresote
    id_apellidos.innerHTML = apellidote
    id_email.innerHTML = emailote
    id_direccion.innerHTML = direccionita
    id_telefono.innerHTML = telefonote
}