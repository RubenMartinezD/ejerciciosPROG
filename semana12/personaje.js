/**
 * 
 */
class Personaje {
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
    set setPV(PV) {
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
            if (this.PV < 0) {
                this.PV = 0;
            }
            alert(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.");
        }
        /**
         * Determinar si el enemigo está vivo o no. Cuando esté muerto mantener su valor de PV en 0.
         * @returns {boolean} vivo 
         */
    vivePersonaje() {
        let vivo;
        if (this.PV < 0) {
            this.PV = 0;
            vivo = false;
        } else if (this.PV == 0) {
            vivo = false;
        } else {
            vivo = true;
        }
        return vivo;
    }

    /**
     * Devuelve un mensaje en función de si el personaje se encuentra vivo o muerto.
     */
    viveMensaje() {
        let estado_vivo = this.vivePersonaje();
        if (estado_vivo == true) {
            alert(this.nombre + " se encuentra vivo.");
        } else {
            alert(this.nombre + " muere!");
        }
    }
}