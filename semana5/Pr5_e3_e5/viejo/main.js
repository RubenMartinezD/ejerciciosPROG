function main() {
    var nombre=nuevo_nombre()
    var apellidos=nuevos_apellidos()
    var email= nuevo_email()
    var telefono=nuevo_tlf()
    var direccion=nueva_direccion()
    function crear_perfil1(){
        var perfil = function(){
            var nombre = ""
            var apellidos = ""
            var direccion = ""
            var telefono = ""
            var email = ""
            alert("El nombre es "+nombre+apellidos+email+telefono+direccion)
        }
        return perfil
    }
    
crear_perfil1()
alert (perfil)
}


main()
