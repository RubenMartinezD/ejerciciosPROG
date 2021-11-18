/**
    * Función que recoge parámetros de usuario y permite cambiarlos
    * @param {string} nombre_inicial - Es el nombre dado de antes por el usuario
    * @param {string} apellido_inicial - Es el apellido dado de antes por el usuario
    * @param {string} direccion_inicial - Es la dirección dada de antes por el usuario
    * @param {string} email_inicial - Es el email dado de antes por el usuario
    * @param {string} telefono_inicial - Es el teléfono dado de antes por el usuario
    * @type {string} apellidofinal
    * @type {string} direccionfinal
    * @type {string} emailfinal
    * @type {string} telefonofinal
*/
function perfilinicial(nombre_inicial, apellido_inicial, direccion_inicial, email_inicial, telefono_inicial) {// Coger parámetros iniciales metidos por el usuario en las funciones enlazadas a main.js
    var nombrefinal = nombre_inicial
    var apellidofinal = apellido_inicial
    var direccionfinal = direccion_inicial  //asignar los valores introducidos por el usuario a variables en esta función
    var emailfinal = email_inicial
    var telefonofinal = telefono_inicial

    var perfil = function (nombre, apellidos, direccion, email, telefono) { //función para creación de objeto perfil que necesitará cinco variables de entrada
        this.nombre = nombre    // Los parámetros de entrada serán agregados como atributos del objeto perfil creado. La primera variable de entrada introducida será el atributo "nombre" del perfil
        this.apellidos = apellidos
        this.direccion = direccion
        this.email = email
        this.telefono = telefono

    }

    var listadatos = new perfil(nombrefinal, apellidofinal, direccionfinal, emailfinal, telefonofinal)
    //La variable listadatos tendrá dentro un objeto perfil, creado con las variables declaradas anterioermente con los datos del usuario

    //-------------------------------EJERCICIO 5
    var id_nombre = document.getElementById("nombre")
    var id_apellidos = document.getElementById("apellidos")
    var id_direccion = document.getElementById("direccion")
    var id_telefono = document.getElementById("telefono")
    var id_email = document.getElementById("email")

    id_nombre.innerHTML = nombrefinal
    id_apellidos.innerHTML = apellidofinal
    id_email.innerHTML = emailfinal
    id_direccion.innerHTML = direccionfinal
    id_telefono.innerHTML = telefonofinal



    //--------------------------------------
    return listadatos
}