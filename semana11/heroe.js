/**
 * 
 */
class Heroe {
    constructor(nombre, NV, PV, AT) {
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.AT = AT;
        this.EXP = 0;
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
    set setPV(PV) {
        this.PV = PV;
    }
    set setAT(AT) {
        this.AT = AT;
    }

    /**
     * 
     * @param {integer} daño_recibido -- Daño recibido por el héroe
     */
    recibirDaño(daño_recibido) {
        this.PV = (this.PV - daño_recibido);
        console.log(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.");
    }

    subirNivel() {
        this.NV += 1;
        this.EXP = 0;
        console.log(this.nombre + " subió al nivel " + this.NV);
    }

    /**
     * Función para calcular la experiencia obtenida
     * @param {integer} valor_exp - Variable para ajustar el nivel de experiencia
     */
    recibirExp(valor_exp) {
        console.log(this.nombre + " recibió " + valor_exp + " puntos de experiencia");
        this.valor_exp = parseInt(valor_exp);
        this.EXP += this.valor_exp;
        if (this.EXP >= 10) {
            this.subirNivel();
        }
    }

    /**
     * Determinar si el héroe está vivo o no. Cuando esté muerto mantener su valor de PV en 0.
     * @returns {boolean} vivo 
     */
    viveHeroe() {
        let vivo;
        if (this.PV < 0) {
            this.PV = 0
            vivo = false;
        } else if (this.PV == 0) {
            vivo = false;
        } else {
            vivo = true;
        }
        return vivo;
    }

    /**
     * Devuelve un mensaje en función de si el héroe se encuentra vivo o muerto.
     */
    viveMensaje() {
        let estado_vivo = this.viveHeroe();
        if (estado_vivo == true) {
            console.log(this.nombre + " se encuentra vivo.");
        } else {
            console.log(this.nombre + " se encuentra muerto.");
        }
    }

    potenciaAtaque() {
        let potencia_final;
        potencia_final = (this.AT * this.NV)
        return potencia_final;
    }
}