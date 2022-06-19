/**
 * Clase Controller
 *  Enlaza el model con el html
 * 
 * @field model encargado de los datos
 * @field vista encargada de los botones de inicio
 */
class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

}
const juego = new Controller(new Model, new View)