function perfil(nombre, apellidos, email, telefono, direccion){
    var nombre = nombre
    var apellidos = apellidos
    var direccion = direccion
    var telefono = telefono
    var email = email
    
var perfil= function(nombre, apellidos, email, telefono, direccion){
    this.nombre = nombre
    this.apellidos = apellidos
    this.direccion = direccion
    this.telefono = telefono
    this.email = email
    }
    
var perfil = new perfil(nombre, apellidos, direccion, telefono, email)
return perfil
}
    /*alert("Tu nombre es "+nombre+
    "\nTus apellidos son "+apellidos+
    "\nTu email es "+email+
    "\nTu telefono es "+telefono+
    "\nTu direccion es "+direccion
    )
}*/