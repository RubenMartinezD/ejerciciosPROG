/**
 * Función principal
 */
function main() {
    $(".padre").css({
        "border": "1px solid black",
        "margin": "1rem",
        "padding": "2rem 2rem",
        "text-align": "center"
    })
    $(".hijo").css({
        "display": "inline-block",
        "padding": "1rem 1rem",
        "vertical-align": "middle"
    })
    $(".heroe").css({
        "font-size": "20px",
        "color": "blue",
        "text-align": "center"
    })
    $(".enemigo").css({
        "font-size": "16px",
        "color": "red",
        "border-width": "3px",
        "border-style": "solid",
        "border-color": "black"
    })
    var boton_combate = document.getElementById("boton_atacar")
    boton_combate.addEventListener('click', combate);

    function combate() {
        var nomheroe = prompt("Dame el nombre del héroe");
        heroe = new Heroe(nomheroe, 2, 20, 5)
        enemigo = new Enemigo("Rodolfo", 5, 25, 7)
        alert("El nivel de " + heroe.getnombre + " es " + heroe.getNV + ". Su salud actual es de " + heroe.getPV + " puntos y su poder de ataque es de " + heroe.getAT);
        $("#PVHMAX").html(heroe.getPVMAX)
        $("#PVEMAX").html(enemigo.getPVMAX)
            // $("lvl, #NV, .heroe").html(heroe.getNV)
            //$("#PV, .heroe").html(heroe.getPV)
            //$("#EXP, .heroe").html(heroe.getEXP)
        alert("El nivel de " + enemigo.getnombre + " es " + enemigo.getNV + ". Su salud actual es de " + enemigo.getPV + " puntos y su poder de ataque es de " + enemigo.getAT);
        $("#NVE").html(enemigo.getNV)
            //$("#PV, .enemigo").html(heroe.getPV)
        var var_ultimoturno = 0
        while (heroe.vivePersonaje() == true && enemigo.vivePersonaje() == true) {
            if (var_ultimoturno == 0 || var_ultimoturno == 1) {
                alert(heroe.getnombre + " ataca!");
                enemigo.recibirDaño(heroe.potenciaAtaque());
                if (!enemigo.vivePersonaje()) {
                    enemigo.viveMensaje();
                    heroe.recibirEXP(enemigo.entregarEXP(heroe.NV));
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
}
main()