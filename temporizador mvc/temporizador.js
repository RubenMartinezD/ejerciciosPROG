/**
 * Objeto que instancia una cuenta atrás
 */
class Temporizador {
    constructor() {
        /**
         * milisegundos de la cuenta atrás, en múltiplos de 10
         * @type {integer} 
         */
        this.milisegundos = 0;
        /**
         * segundos de la cuenta atrás, empezando en 60
         * @type {integer}
         */
        this.segundos = 0;
        /**
         * variable con el intervalo necesario para la cuenta atrás
         * @type {interval}
         */
        this.intervalo = null;
        /**
         * Booleano que termina el juego si es false
         * @type {interval}
         */
        this.bool_cuenta = true;
        /**
         * Display del HTML que muestra al usuario el tiempo de juego restante
         */
        this.display = document.getElementById("display_tiempo")
    }


    /**
     * Función que lleva a cabo el temporizador mediante un intervalo
     */
    contandoAdelante() {
        clearInterval(this.intervalo);
        this.intervalo = null;
        this.milisegundos = 0;
        this.segundos = 0;
        this.bool_cuenta = true
        this.intervalo = setInterval(() => {
            if (this.bool_cuenta) {
                this.display.innerHTML = this.segundos + " : " + this.milisegundos
                if (this.milisegundos == 1000) {
                    this.milisegundos = 0;
                    this.segundos++;
                }
                this.milisegundos += 10;
            }
            console.log(this.segundos + " : " + this.milisegundos)
        }, 10);
    }
}