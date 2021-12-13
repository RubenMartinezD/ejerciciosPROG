function jugarLiga(Liga) {
    var array_partidos = []
    for (i in Liga.lista_equipos) {
        var equipo1 = Liga.lista_equipos[i]
        for (j in Liga.lista_equipos) {
            var equipo2 = Liga.lista_equipos[j]
            if (equipo1 == equipo2) { break }
            else {
                var id_partido = concatenarIds(equipo1, equipo2)
                if (array_partidos.includes(id_partido)) { break }
                else if (id_partido !== undefined) {
                    var RNG = Math.floor(Math.random() * 100 + 1)
                    if (RNG <= 45) {
                        console.log(equipo1.nombre_equipo + " ganan contra " + equipo2.nombre_equipo)
                        equipo1.nombre_equipo = equipo1.nombre_equipo
                        equipo1.partidos_jugados++
                        equipo1.globoshinchados = Math.floor(Math.random() * 300)
                        equipo1.puntos = equipo1.puntos + 3
                        equipo1.victorias++
                        equipo2.nombre_equipo = equipo2.nombre_equipo
                        equipo2.partidos_jugados++
                        equipo2.globoshinchados = Math.floor(Math.random() * equipo1.globoshinchados)
                        equipo2.derrotas++
                    }
                    else if (RNG >= 56) {
                        console.log(equipo1.nombre_equipo + " pierden contra " + equipo2.nombre_equipo)
                        equipo2.nombre_equipo = equipo2.nombre_equipo
                        equipo2.partidos_jugados++
                        equipo2.globoshinchados = Math.floor(Math.random() * 300)
                        equipo2.puntos = equipo2.puntos + 3
                        equipo2.victorias++
                        equipo1.nombre_equipo = equipo1.nombre_equipo
                        equipo1.partidos_jugados++
                        equipo1.globoshinchados = Math.floor(Math.random() * equipo2.globoshinchados)
                        equipo1.derrotas++
                    }
                    else {
                        console.log(equipo1.nombre_equipo + " y " + equipo2.nombre_equipo + " empataron!")
                        equipo1.nombre_equipo = equipo1.nombre_equipo
                        equipo1.partidos_jugados++
                        equipo1.puntos = equipo1.puntos + 1
                        equipo1.globoshinchados = Math.floor(Math.random() * 300)
                        equipo1.empates++
                        equipo2.nombre_equipo = equipo2.nombre_equipo
                        equipo2.partidos_jugados++
                        equipo2.puntos = equipo2.puntos + 1
                        equipo2.globoshinchados = equipo1.globoshinchados
                        equipo2.empates++
                    }
                    array_partidos.push(id_partido)
                }
            }
        }
    }
    console.log(Liga.lista_equipos)
    /*var valores_puntos = []
var valores_nombres = []
for (i in Liga.lista_equipos) {
    var equipuntos = Liga.lista_equipos[i]
    var valor_puntos = equipuntos.puntos
    valores_puntos.push(valor_puntos)
}
valores_puntos.sort(function (a, b) {
    return a - b;
});
valores_puntos.splice(3)
for (i in Liga.lista_equipos) {
    var equipuntos = Liga.lista_equipos[i]
    var valor_puntos = equipuntos.puntos
    if (valores_puntos.includes(valor_puntos)) {
        valores_nombres.push(equipuntos.nombre_equipo)
    }
}
console.log(Liga) */
}