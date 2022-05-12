class Model {
    constructor() {

        this.temporizador = [
            new Timer(0, 0, 0, 0),
        ]
    }

    addTimer(model) {
        this.timer = new Timer(model)
    }

    // obtenemos un coche según el modelo
    getCar(model) {
        // buscando en el array el objeto
        // cuya propiedad model coincida con el parámetro que le estamos pasando
        return this.cars.find(_car => _car.model === model)
    }

}