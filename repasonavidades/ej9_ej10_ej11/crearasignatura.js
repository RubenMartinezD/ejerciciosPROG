function crearAsignatura() {
    var asignanombre = prompt("¿Como se llama la asignatura?")
    var asignan1 = prompt("Cual es la nota del primer trimestre?")
    var asignan2 = prompt("Cual es la nota del segundo trimestre?")
    var asignan3 = prompt("Cual es la nota del tercer trimestre?")
    objeto_asignatura = new Asignatura(asignanombre, asignan1, asignan2, asignan3)
    return objeto_asignatura
}
