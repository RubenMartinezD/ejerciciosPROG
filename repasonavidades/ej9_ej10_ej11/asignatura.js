
var Asignatura = function (nombredicho, n1, n2, n3) {
    Asignatura.prototype.nombre = nombredicho     // le sumamos 10 para evitar líos después con los códigos de partido
    Asignatura.prototype.notatri1 = parseInt(n1)
    Asignatura.prototype.notatri2 = parseInt(n2)
    Asignatura.prototype.notatri3 = parseInt(n3)
    Asignatura.prototype.notafinal = calcularMedia(Asignatura.prototype.notatri1, Asignatura.prototype.notatri2, Asignatura.prototype.notatri3)
}