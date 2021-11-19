/**
 * Función que añade y valora obras de arte
 */
function artes() {
    var Arte = function () {   //crear objeto Arte
        /**
         * Creación de objeto padre para crear obras de arte
         * @type {object} peli- variable donde se introducirá un objeto Cine nuevo.
         * @type {object} estatua- variable donde se introducirá un objeto Escultura nuevo.
         * @type {object} cuadrote- variable donde se introducirá un objeto Pintura nuevo.
         * @type {object} liveaction- variable donde se introducirá un objeto Teatro nuevo.
         * 
         */
        Arte.prototype.nombre = ""
    }
    /**
    * Función común para todas las obras de arte, que las alaba por consola
    */
    Arte.prototype.alabarObra = function () { //crear función común 
        console.log(this.nombre + " es impresionante")
    }
    /**
     * Función para crear un objeto Cine, que será heredado a Arte
     * @type {string} duracion - Tiempo que dura la película
     * @type {string} género - Género de la película
     */
    var Cine = function (duracion, genero) {
        this.duracion = duracion              //asignar las variables de entrada a los atributos del objeto
        this.genero = genero
        /**
        * crear función inherente al objeto Cine llamada datocine, que muestra los atributos del objeto y alaba a la obra por consola
        */
        this.datocine = function () {
            alert("Nombre:" + this.nombre + "\n Duración:" + this.duracion + "\n Género: " + this.genero)
            this.alabarObra()                       //hace la función alabarObra independientemente del nombre de la variable que contenga el new Cine
        }
    }
    for (id in Arte.prototype) {                //se hace la herencia
        Cine.prototype[id] = Arte.prototype[id]
    }
    /**
     * Función para crear un objeto Escultura, que será heredado a Arte
     * @type {string} material - Material del que está compuesto la escultura
     * @type {string} epoca - Siglo de la creación de la escultura
     */
    var Escultura = function (material, epoca) {
        this.material = material
        this.epoca = epoca
        /**
        * Muestra los atributos del objeto y alaba a la obra por consola
        */
        this.datoescultura = function () {
            alert("Nombre:" + this.nombre + "\n Material:" + this.material + "\n Época: " + this.epoca)
            this.alabarObra()
        }
    }
    for (id in Arte.prototype) {
        Escultura.prototype[id] = Arte.prototype[id]
    }
    /**
     * Función para crear un objeto Pintura, que será heredado a Arte
     * @type {string} autor - Autor del cuadro
     * @type {string} estilo - Estilo artístico de la pintura
     */
    var Pintura = function (autor, estilo) {
        this.autor = autor
        this.estilo = estilo
        /**
        * Muestra los atributos del objeto y alaba a la obra por consola
        */
        this.datopintura = function () {
            alert("Nombre:" + this.nombre + "\n Autor:" + this.autor + "\n Estilo: " + this.estilo)
            this.alabarObra()
        }
    }
    for (id in Arte.prototype) {
        Pintura.prototype[id] = Arte.prototype[id]
    }
    /**
     * Función para crear un objeto Teatro, que será heredado a Arte
     * @type {string} duracion - Duración de la obra
     * @type {string} epoca - Siglo de la creación de la obra escénica
     */
    var Teatro = function (duracion, epoca) {
        this.duracion = duracion
        this.epoca = epoca
        this.datoteatro = function () {
            /**
            * Muestra los atributos del objeto y alaba a la obra por consola
            */
            alert("Nombre:" + this.nombre + "\n Duración:" + this.duracion + "\n Época: " + this.epoca)
            this.alabarObra()
        }

    }
    for (id in Arte.prototype) {
        Teatro.prototype[id] = Arte.prototype[id]
    }
    var peli = new Cine("1:43", "Drama")  //creación de nuevo objeto Cine, con dos parametros de entrada dentro de la variable peli
    var estatua = new Escultura("Hierba y palos", "Siglo XXI")
    var cuadrote = new Pintura("Dalí", "Surrealismo")
    var liveaction = new Teatro("1:45", "1889")
    peli.nombre = "El show de Truman"  //fijación del atributo nombre 
    estatua.nombre = "Dinoseto"
    cuadrote.nombre = "La persistencia de la memoria"
    liveaction.nombre = "Moulin Rouge"
    peli.datocine()     //ejecución de la función vista arriba que muestra los atributos del objeto peli y alaba la obra
    estatua.datoescultura()
    cuadrote.datopintura()
    liveaction.datoteatro()
}