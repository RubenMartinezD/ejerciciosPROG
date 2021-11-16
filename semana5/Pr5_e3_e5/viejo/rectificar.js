function rectificar(nombre, apellidos, email, telefono, direccion){
    var cambiovariable= prompt("Qué dato metiste mal?\n 1. Nombre\n2. Apellidos\n3. E-Mail\n4. Teléfono\n5. Dirección")
    switch(cambiovariable){
        case "1":
            var nombre=nuevo_nombre()
            alert("El nombre fue cambiado")
            return nombre
        case "2": 
            nuevos_apellidos()
            alert("Los apellidos fueron cambiados")
            return apellidos
        case "3": 
            nuevo_email()
            alert("El email fue cambiado")
            return email
        case "4": 
            nuevo_tlf()
            alert("El telefono fue cambiado")
            return telefono
        case "5":
            nueva_direccion()
            alert("La dirección fue cambiada")
            return direccion
        default: 
            alert("Excepción no controlada. Terrible, apocalítico")
        } 

}