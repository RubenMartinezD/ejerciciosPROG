/**
 * 
 */
class Personaje {
    constructor(nombre, NV, PV, AT) {
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.PVMAX = PV;
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
     * Función para calcular el daño inflingido.
     * @param {integer} daño_recibido -- Daño recibido por el oponente
     */
    recibirDaño(daño_recibido) {
        this.PV = (this.PV - daño_recibido);
        if (this.PV < 0) {
            this.PV = 0;
        }
        alert(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.");
        $("#PVE").html(enemigo.getPV)
        $("#PVH").html(heroe.getPV)
    }

    /**
     * Determinar si el personaje está vivo o no. Cuando esté muerto mantener su valor de PV en 0. Usar esta función para definir los stats al inicio.
     * @returns {boolean} vivo 
     */
    vivePersonaje() {
        $("#PVE").html(enemigo.getPV)
        $("#NVE").html(enemigo.getNV)
        $("#PVH").html(heroe.getPV)
        $("#NVH").html(heroe.getNV)
        $("#PVHMAX").html(heroe.getPVMAX)
        $("#PVEMAX").html(enemigo.getPVMAX)
        $("#EXPH").html(heroe.getEXP)
        let vivo;
        if (this.PV < 0) {
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