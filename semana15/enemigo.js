/**
 * Creación de objeto enemigo.
 */
class Enemigo extends Personaje {
    constructor(nombre, NV, PV, AT, DF, CR, EV) {
        super(nombre, NV, PV, AT, DF, CR, EV);
        this.nombre = nombre;
        this.NV = NV;
        this.PV = PV;
        this.PVMAX = PV;
        this.AT = AT;
        this.DF = DF;
        this.CR = CR;
        this.EV = EV;
    }

    get getPVMAX() {
        return this.PVMAX
    }

    /**
     * Función para calcular la experiencia obtenida
     * @param {integer} valor_exp - Variable para ajustar el nivel de experiencia
     */
    entregarEXP(valor_exp) {
        this.valor_exp = parseInt(valor_exp);
        let puntos_exp = ((this.NV * 5) / this.valor_exp);
        // alert("Al matar al " + this.nombre + " se reciben " + puntos_exp + " puntos de experiencia");
        return puntos_exp;
    }
}