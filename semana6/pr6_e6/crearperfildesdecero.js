function crearPerfilDesdeCero() {
    var nombreParaPerfil = nuevo_nombre()
    var apellidosParaPerfil = nuevos_apellidos()
    var direccionParaPerfil = nueva_direccion()
    var emailParaPerfil = nuevo_email()
    var telefonoParaPerfil = nuevo_telefono()
    var NuevoPerfil = function PerfilDesdeParametros(nombreParaPerfil, apellidosParaPerfil, direccionParaPerfil, emailParaPerfil, telefonoParaPerfil) {
        this.nombre = nombreParaPerfil
        this.apellidos = apellidosParaPerfil
        this.direccion = direccionParaPerfil
        this.email = emailParaPerfil
        this.telefono = telefonoParaPerfil
        alert("Se ha creado un perfil!\n Nombre:" + this.nombre + "\nApellidos: " + this.apellidos + "\n Dirección: " + this.direccion + "\nEmail: " + this.email + "\nDirección: " + this.direccion)
    }
    var listaDatos = new NuevoPerfil(nombreParaPerfil, apellidosParaPerfil, direccionParaPerfil, emailParaPerfil, telefonoParaPerfil)
    return listaDatos
}