/**
 * Función principal
 */
function main() {
    cosa = new Enemigo("Rodolfo", "3", "25", "8")
    console.log("El nivel de " + cosa.getnombre + " es " + cosa.getNV + ". Su salud actual es de " + cosa.getPV + " puntos y su poder de ataque es de " + cosa.getAT)
    cosa.setnombre = "Mengano";
    cosa.setPV = 8000;
    cosa.setNV = 5;
    cosa.setAT = 666;
    console.log("El nivel de " + cosa.getnombre + " es " + cosa.getNV + ". Su salud actual es de " + cosa.getPV + " puntos y su poder de ataque es de " + cosa.getAT)
}
main()