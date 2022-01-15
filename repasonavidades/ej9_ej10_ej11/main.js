/**
    * Función principal
*/
function main() {
    var todas_asignaturas = []
    var menu = true
    var mediacion = 0
    while (menu) {
        var menuasignatura = prompt("Bienvenido al servicio automático de creación de asignaturas. Las opciones son:\n1.Introducir asignatura\n2.Ver asignaturas\n3. Calcular media de todas las asignaturas\n4.Salir del sistema")
        switch (menuasignatura) {
            case "1":
                var asignatura_creada = crearAsignatura()
                todas_asignaturas.push(asignatura_creada)
                break
            case "2":
                for (i in todas_asignaturas) {
                    var asignatura_extraida = todas_asignaturas[i]
                    var nombre_extraido = asignatura_extraida.nombre
                    var nota1_extraida = asignatura_extraida.notatri1
                    var nota2_extraida = asignatura_extraida.notatri2
                    var nota3_extraida = asignatura_extraida.notatri3
                    var notafinal_extraida = asignatura_extraida.notafinal
                    numero = parseInt(i) + 1
                    alert("Asignatura número " + numero + " : " + nombre_extraido + " Notas de los trimestres: " + nota1_extraida + " , " + nota2_extraida + " , " + nota3_extraida + " Nota final: " + notafinal_extraida)
                }
                break
            case "3":
                for (i in todas_asignaturas) {
                    var asignatura_extraida = todas_asignaturas[i]
                    var notafinal_extraida = asignatura_extraida.notafinal
                    mediacion = mediacion + notafinal_extraida
                }
                var mediatotal = mediacion / (i + 1)
                alert("La media de todas las asignaturas en conjunto es de " + mediatotal)
                break
            case "4":
                alert("Pues hasta luego")
                menu = false
                break
            default:
                alert("Excepción no controlada. Terrible, apocalíptico")
                break
        }
    }
}
main()  