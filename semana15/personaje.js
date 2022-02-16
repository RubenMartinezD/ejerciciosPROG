/**
 * 
 */
class Personaje {
    constructor(nombre, NV, PV, AT, DF, CR, EV) {
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.PVMAX = PV;
        this.AT = AT;
        this.DF = DF;
        this.CR = CR; // Probabilidad de golpe crítico
        this.EV = EV; // Probabilidad de evadir ataques (daño nulo)
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
    get getDF() {
        return this.DF;
    }
    get getCR() {
        return this.CR;
    }
    get getEV() {
        return this.EV;
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
    set setDF(DF) {
        this.DF = DF;
    }
    set setCR(CR) {
        this.CR = CR;
    }
    set setEV(EV) {
        this.EV = EV;
    }


    /**
     * Función para calcular el daño recibido
     * @param {integer} poder_atacante - Poder de ataque del atacante
     * @param {*} poder_defensor - Poder de defensa del defensor
     * @param {*} critico_atacante - Porcentaje de golpe crítico del atacante
     * @param {*} evasion_defensor - Porcentaje de evasión del defensor
     * @param {*} accion_defendiendo - Si true, indica que el personaje se está defendiendo y recibe la mitad del daño
     */

    recibirDaño(poder_atacante, poder_defensor, critico_atacante, evasion_defensor, accion_defendiendo) {
        var isCritico = calculoCritico(critico_atacante)
        var isEsquivado = calculoEvasion(evasion_defensor)
        var isDefendiendo = accion_defendiendo
        if (isCritico == true) {
            let daño_recibido = poder_atacante //ignorar defensa para los golpes críticos
            this.PV = (this.PV - daño_recibido);
            if (this.PV < 0) {
                this.PV = 0;
            }
            alert("Un golpe crítico! " + this.nombre + " recibió " + daño_recibido + " puntos de daño! Su salud actual es de " + this.PV + " PV.")
        } else if (isEsquivado == true) { //si esquiva el golpe
            alert(this.nombre + " esquivó el ataque con facilidad!")
        } else { // daño normal
            let ataque = poder_atacante;
            let defensa = poder_defensor;
            let daño_recibido = Math.floor(((ataque - (defensa / 2) + (((ataque - (defensa / 2) + 1) * Math.floor(Math.random() * 256)) / 256)) / 4)) //Fórmula de daño sacada de internet
            if (isDefendiendo == true) {
                daño_recibido = Math.floor(daño_recibido / 2)
            }
            if (daño_recibido == 0) {
                alert(this.nombre + " bloqueó el golpe y no recibió daño!")
            } else {
                this.PV = (this.PV - daño_recibido);
                if (this.PV < 0) {
                    this.PV = 0;
                }
                alert(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.");
            }
        }
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