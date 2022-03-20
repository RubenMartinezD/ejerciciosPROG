// Son la misma fórmula, pero las separo por claridad.
function calculoCritico(valor_critico) {
    let critico;
    let random = Math.floor(Math.random() * 100)
    if (random <= valor_critico) {
        critico = true;
    } else { critico = false; }
    return critico;
}

function calculoEvasion(valor_evasion) {
    let evasion;
    let random = Math.floor(Math.random() * 100)
    if (random <= valor_evasion) {
        evasion = true;
    } else { evasion = false; }
    return evasion;
}