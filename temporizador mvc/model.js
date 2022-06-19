class Model {

    constructor() {
        this.temporizador = ""
    }

    iniciarTemporizador() {
        /**
         * Objeto del jugador que se define al principio de la partid
         * @type {object} 
         */
        this.temporizador = new Temporizador();
    };
}