function datosIntrumentos() {
    var arrayinstrumentos = []
    var Instrumento = function () {
    }
    Instrumento.prototype.nombre = ""
    Instrumento.prototype.timbre = ""
    Instrumento.prototype.emitirSonido = function () {
        console.log("Me duelen los oidos de escuchar al " + this.nombre);
    }

    var Cuerda = function () {
        this.cuerdanse = function () {
            console.log(this.nombre + "  es un instrumento de cuerda")
        }
    }
    for (id in Instrumento.prototype) {
        Cuerda.prototype[id] = Instrumento.prototype[id];
    }

    var Viento = function () {
        this.vientanse = function () {
            console.log(this.nombre + "  es un instrumento de viento")
        }
    }
    for (id in Instrumento.prototype) {
        Viento.prototype[id] = Instrumento.prototype[id];
    }

    var Percusion = function () {
        this.percusionada = function () {
            console.log(this.nombre + "  es un instrumento de percusión")
        }
    }
    for (id in Instrumento.prototype) {
        Percusion.prototype[id] = Instrumento.prototype[id];
    }

    var guitarra = new Cuerda();
    guitarra.nombre = "guitarra"
    var bajo = new Cuerda();
    bajo.nombre = "bajo"
    var flauta = new Viento();
    flauta.nombre = "flauta"
    var oboe = new Viento();
    oboe.nombre = "oboe"
    var bombo = new Percusion();
    bombo.nombre = "bombo"
    var marimba = new Percusion();
    marimba.nombre = "marimba"

    arrayinstrumentos = [guitarra, bajo, flauta, oboe, bombo, marimba]
    return arrayinstrumentos
}

