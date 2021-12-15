function main() {
    var datos = datosIntrumentos();
    for (i in datos) {
        datos[i].emitirSonido()
    }
}
main()