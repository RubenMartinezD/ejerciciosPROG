function refrescarhtml(perfil){
var id_nombre = document.getElementById("nombre")
var id_apellidos = document.getElementById("apellidos")
var id_email = document.getElementById("email")
var id_direccion = document.getElementById("direccion")
var id_telefono = document.getElementById("telefono")

var nombresote=perfil.nombre
var apellidote=perfil.apellidos
var emailote=perfil.email
var direccionita= perfil.direccion
var telefonote= perfil.telefono

id_nombre.innerHTML = nombresote
id_apellidos.innerHTML = apellidote
id_email.innerHTML = emailote
id_direccion.innerHTML = direccionita
id_telefono.innerHTML = telefonote
}