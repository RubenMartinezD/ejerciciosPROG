/**
 */
function listaimpar(numerito) {
    var numerofinal = numerito
    var numeroinicial = 1
    var cursorcillo = numeroinicial
    arraympar = []
    while (cursorcillo <= numerofinal) {
        arraympar.push(cursorcillo)
        cursorcillo++
        cursorcillo++
    }
    return arraympar
}

