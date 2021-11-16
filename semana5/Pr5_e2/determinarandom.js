function determinarandom(numerousr){
    var numerousr=numerousr
    var numerotarget
    numerotarget=(Math.floor(Math.random() * 101))
    var resultado
    if (numerousr==numerotarget)
    {resultado= alert("Pues acertaste, campeón")}
    else {resultado= alert("Fallaste, mandril")}
    return resultado
}