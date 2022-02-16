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
    var juego = false
    var boton_inicio = document.getElementById("boton_empezar")
    boton_inicio.addEventListener('click', () => {
        iniciarJuego();
        juego = true;
    });

    var boton_combate = document.getElementById("boton_atacar")
    boton_combate.addEventListener('click', accionAtacar);

    var boton_defensa = document.getElementById("boton_defensa")
    boton_defensa.addEventListener('click', accionDefender);

    /**
     * Función para determinar los parámetros iniciales del juego y mostrarlos en el .html
     */
    function iniciarJuego() {
        var nomheroe = prompt("Dame el nombre del héroe");
        heroe = new Heroe(nomheroe, 2, 20, 5, 2, 40, 25)
        enemigo = new Enemigo("Rodolfo", 5, 25, 7, 5, 3, 1)
        $("#NOMH").html(heroe.getnombre)
        $("#NOME").html(enemigo.getnombre)
        alert("El nivel de " + heroe.getnombre + " es " + heroe.getNV + ". Su salud actual es de " + heroe.getPV + " puntos, su poder de ataque es de " + heroe.getAT + " y posee " + heroe.getDF + " puntos de defensa.");
        alert("El nivel de " + enemigo.getnombre + " es " + enemigo.getNV + ". Su salud actual es de " + enemigo.getPV + " puntos, su poder de ataque es de " + enemigo.getAT + " y posee " + enemigo.getDF + " puntos de defensa.");
        heroe.vivePersonaje();
        enemigo.vivePersonaje();
    }

    /**
     * Función para cuando se selecciona la opción "atacar"
     */
    function accionAtacar() {
        if (juego == false) { alert("¡Necesitas comenzar una partida para jugar!") } else if (heroe.vivePersonaje() == true && enemigo.vivePersonaje() == true) {
            alert(heroe.getnombre + " ataca!");
            enemigo.recibirDaño(heroe.getAT, enemigo.getDF, heroe.getCR, enemigo.getEV, false);
            if (!enemigo.vivePersonaje()) {
                enemigo.viveMensaje();
                heroe.recibirEXP(Math.floor(enemigo.entregarEXP(heroe.NV)));
                juego = heroe.preguntaContinue();
                if (juego == true) {
                    iniciarJuego();
                }
            }
            if (enemigo.vivePersonaje() == true) {
                alert(enemigo.getnombre + " enemigo ataca!");
                heroe.recibirDaño(enemigo.getAT, heroe.getDF, enemigo.getCR, heroe.getEV, false)
                if (!heroe.vivePersonaje()) {
                    heroe.viveMensaje();
                    alert("GAME OVER");
                    juego = heroe.preguntaContinue();
                    if (juego == true) {
                        iniciarJuego();
                    }
                }

            }
        } else alert("Se acabó la partida.");
    }

    /**
     * Función para cuando se selecciona la opción "defender"
     */
    function accionDefender() {
        if (juego == false) { alert("¡Necesitas comenzar una partida para jugar!") } else if (heroe.vivePersonaje() == true && enemigo.vivePersonaje() == true) {
            alert(heroe.getnombre + " adopta una postura defensiva!");
            alert(enemigo.getnombre + " enemigo ataca!");
            heroe.recibirDaño(enemigo.getAT, heroe.getDF, enemigo.getCR, heroe.getEV, true)
            if (!heroe.vivePersonaje()) {
                heroe.viveMensaje();
                alert("GAME OVER");
                juego = heroe.preguntaContinue();
                if (juego == true) {
                    iniciarJuego();
                }
            }
        } else {
            alert("Se acabó la partida.");
            juego = heroe.preguntaContinue();
            if (juego == true) {
                iniciarJuego();
            }
        }
    }
}

/*
    function combate() {
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
                break;
            }
        }
    }
    //   heroe.recibirDaño(Math.floor((enemigo.AT) / 3))
*/


main()