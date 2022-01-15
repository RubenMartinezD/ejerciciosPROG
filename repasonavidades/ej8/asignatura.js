

var Asignatura = function (nombredicho) {
    Asignatura.prototype.nombre = nombredicho     // le sumamos 10 para evitar líos después con los códigos de partido
    Asignatura.prototype.notatri1 = 0
    Asignatura.prototype.notatri2 = 5
    Asignatura.prototype.notatri3 = 10
    Asignatura.prototype.notafinal = calcularMedia(Asignatura.prototype.notatri1, Asignatura.prototype.notatri2, Asignatura.prototype.notatri3)
}