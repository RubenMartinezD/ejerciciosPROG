/**
 * Función principal
 */
function main() {
    var nomheroe = prompt("Dame el nombre del héroe");
    heroe = new Heroe(nomheroe, 2, 20, 5)
    enemigo = new Enemigo("Rodolfo", 5, 25, 7)
    alert("El nivel de " + heroe.getnombre + " es " + heroe.getNV + ". Su salud actual es de " + heroe.getPV + " puntos y su poder de ataque es de " + heroe.getAT);
    alert("El nivel de " + enemigo.getnombre + " es " + enemigo.getNV + ". Su salud actual es de " + enemigo.getPV + " puntos y su poder de ataque es de " + enemigo.getAT);
    var var_ultimoturno = 0
    while (heroe.vivePersonaje() == true && enemigo.vivePersonaje() == true) {
        if (var_ultimoturno == 0 || var_ultimoturno == 1) {
            alert(heroe.getnombre + " ataca!");
            enemigo.recibirDaño(heroe.potenciaAtaque());
            if (!enemigo.vivePersonaje()) {
                enemigo.viveMensaje();
                heroe.recibirExp(enemigo.entregarEXP(heroe.NV));
            }
            var_ultimoturno = -1;
        } else if (var_ultimoturno == -1) {
            alert(enemigo.getnombre + " enemigo ataca!");
            heroe.recibirDaño(enemigo.AT)
            if (!heroe.vivePersonaje()) {
                heroe.viveMensaje();
                alert("GAME OVER");
            }
            var_ultimoturno = 1;
        }

    }
}
main()