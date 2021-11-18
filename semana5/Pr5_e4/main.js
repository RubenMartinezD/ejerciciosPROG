/** 
    * Función principal
    * @type {object} perfil - Variable donde se introducirá el objeto_perfil. Así se puede cambiar cada dato individualmente
    * @type {object} Arte 
    * @type {string} menusito - Menú del usuario
    * @type {string} cambiovariable - Para cuando el usuario quiera cambiar un dato en concreto
    * @type {object} perfilmostrado - contiene el objeto Perfil
*/
function main() {
    /** 
    * Función principal, que valora obras de arte
    * @type {object} perfil - Variable donde se introducirá el objeto_perfil. Así se puede cambiar cada dato individualmente

*/
    var Arte = function () {   //crear objeto Arte
        Arte.prototype.nombre = ""   //crear atributo común nombre, vacío. Se usa prototype para poder heredar
    }
    Arte.prototype.alabarObra = function () { //crear función común 
        console.log(this.nombre + " es impresionante")
    }

    var Cine = function (duracion, genero) {   //crear objeto Cine con dos variables en entrada
        this.duracion = duracion              //asignar las variables de entrada a los atributos del objeto
        this.genero = genero
        this.datocine = function () {                 //crear función inherente al objeto Cine llamada Datocine, que muestra los atributos del objeto y alaba a la obra por consola
            alert("Nombre:" + this.nombre + "\n Duración:" + this.duracion + "\n Género: " + this.genero)
            this.alabarObra()                       //hace la función alabarObra independientemente del nombre de la variable que contenga el new Cine
        }
    }

    for (id in Arte.prototype) {                //se hace la herencia
        Cine.prototype[id] = Arte.prototype[id]
    }

    var Escultura = function (material, epoca) {
        this.material = material
        this.epoca = epoca
        this.datoescultura = function () {
            alert("Nombre:" + this.nombre + "\n Material:" + this.material + "\n Época: " + this.epoca)
            this.alabarObra()
        }
    }

    for (id in Arte.prototype) {
        Escultura.prototype[id] = Arte.prototype[id]
    }

    var Pintura = function (autor, estilo) {
        this.autor = autor
        this.estilo = estilo
        this.datopintura = function () {
            alert("Nombre:" + this.nombre + "\n Autor:" + this.autor + "\n Estilo: " + this.estilo)
            this.alabarObra()
        }

    }

    for (id in Arte.prototype) {
        Pintura.prototype[id] = Arte.prototype[id]

    } var Teatro = function (duracion, epoca) {
        this.duracion = duracion
        this.epoca = epoca
        this.datoteatro = function () {
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
main()