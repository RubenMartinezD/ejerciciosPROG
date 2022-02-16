/**
 * Creación de objeto enemigo.
 */
class Enemigo extends Personaje {
    constructor(nombre, NV, PV, AT) {
        super(nombre, NV, PV, AT);
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.PVMAX = PV;
        this.AT = AT;
    }

    /*
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
    
    
    */
    get getPVMAX() {
            return this.PVMAX
        }
        /*
        recibirDaño(daño_recibido) {
        this.PV = (this.PV - daño_recibido);
        alert(this.nombre + " recibió " + daño_recibido + " puntos de daño. Su salud actual es de " + this.PV + " PV.");
        }
        */

    /**
     * Función para calcular la experiencia obtenida
     * @param {integer} valor_exp - Variable para ajustar el nivel de experiencia
     */
    entregarEXP(valor_exp) {
        this.valor_exp = parseInt(valor_exp);
        let puntos_exp = ((this.NV * 5) / this.valor_exp);
        // alert("Al matar al " + this.nombre + " se reciben " + puntos_exp + " puntos de experiencia.");
        return puntos_exp;
    }

    /*
    viveEnemigo() {
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
    */

    /**
     * Devuelve un mensaje en función de si el enemigo se encuentra vivo o muerto.
     */
    /*
     viveMensaje() {
         let estado_vivo = this.viveEnemigo();
         if (estado_vivo == true) {
             alert("El " + this.nombre + " se encuentra vivo.");
         } else {
             alert("El " + this.nombre + " se encuentra muerto.");
         }
        
 }
 */
}