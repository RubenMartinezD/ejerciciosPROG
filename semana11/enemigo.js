/**
 * 
 */
class Enemigo {
    constructor(nombre, NV, PV, AT) {
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.AT = AT;
    }
    get getnombre() {
        return this.nombre;
    }
    get getNV() {
        return this.NV;
    }
    get getPV() {
        return this.PV;
    }
    get getAT() {
        return this.AT;
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

    /**
     * 
     * @param {integer} daño_recibido -- Daño recibido por el enemigo
     */
    recibirDaño(daño_recibido) {
        this.PV = (this.PV - daño_recibido);
        console.log(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.");
    }

    /**
     * Función para calcular la experiencia obtenida
     * @param {integer} valor_exp - Variable para ajustar el nivel de experiencia
     */
    recibirExp(valor_exp) {
        this.valor_exp = parseInt(valor_exp);
        let puntos_exp = ((this.NV * 5) / this.valor_exp);
        console.log("Al matar al " + this.nombre + " se reciben " + puntos_exp + " puntos de experiencia.");
    }

    /**
     * Determinar si el enemigo está vivo o no. Cuando esté muerto mantener su valor de PV en 0.
     * @returns {boolean} vivo 
     */
    viveEnemigo() {
        let vivo;
        if (this.PV < 0) {
            this.PV == 0
            vivo = false;
        } else if (this.PV == 0) {
            vivo = false;
        } else {
            vivo = true;
        }
        return vivo;
    }

    /**
     * Devuelve un mensaje en función de si el enemigo se encuentra vivo o muerto.
     */
    viveMensaje() {
        let estado_vivo = this.viveEnemigo()
        if (estado_vivo == true) {
            console.log(this.nombre + " se encuentra vivo.")
        } else {
            console.log(this.nombre + " se encuentra muerto.")
        }
    }
}