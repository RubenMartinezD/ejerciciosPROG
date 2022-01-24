class Enemigo {
    constructor(nombre, NV, PV, AT) {
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.AT = AT;
    }
    get getnombre() {
        return this.nombre
    }
    get getNV() {
        return this.NV
    }
    get getPV() {
        return this.PV
    }
    get getAT() {
        return this.AT
    }
    set setnombre(nombre) {
        this.nombre = nombre;
    }
    set setNV(NV) {
        this.NV = NV;
    }
    set setNV(PV) {
        this.PV = PV;
    }
    set setAT(AT) {
        this.AT = AT;
    }
    recibirDaño(daño_recibido) {
        this.PV = (this.PV - daño_recibido)
        console.log(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.")
    }
    recibirExp(valor_exp) {
        this.valor_exp = parseInt(valor_exp)
        let puntos_exp = ((this.NV * 5) / this.valor_exp)
        console.log("Al matar al " + this.nombre + " se reciben " + puntos_exp + " puntos de experiencia.")
    }
}