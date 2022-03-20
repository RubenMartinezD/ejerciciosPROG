function preload() {
    var cuerpo = document.getElementById("cuerpo");

    //Tamaño fuente
    var tamFuente = localStorage.getItem("tamFuente");
    cuerpo.style.fontSize = tamFuente;
    var radio = document.getElementsByClassName("tamTexto");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == tamFuente) {
            radio[i].checked = true;
        } else {
            radio[i].checked = false;
        }
    }

    //nombre héroe
    var nomheroe = document.getElementById("NOMH");
    var valor_heroe = sessionStorage.getItem("NOMH");
    console.log("nombre del hereo al inicar sesiobn: " + valor_heroe)
    nomheroe.value = valor_heroe
    nomheroe.innerHTML = valor_heroe

    //Color fuente héroe
    var texto_heroe = document.getElementById("NOMH");
    var colorFuente = sessionStorage.getItem("colorTH");
    texto_heroe.style.color = colorFuente;
    var color_TH = document.getElementsByName("colorTexto")
    for (var i = 0; i < color_TH.length; i++) {
        if (color_TH[i].value == colorFuente) {
            color_TH[i].checked = true;
        } else {
            color_TH[i].checked = false;
        }
    }

    //Color fondo héroe
    var texto_heroe = document.getElementById("NOMH");
    var colorFondo = sessionStorage.getItem("colorFondoHeroe");
    texto_heroe.style.backgroundColor = colorFondo;
    var color_FH = document.getElementsByName("colorHeroe")
    for (var i = 0; i < color_FH.length; i++) {
        if (color_FH[i].value == colorFondo) {
            color_FH[i].checked = true;
        } else {
            color_FH[i].checked = false;
        }
    }

    //Color fondo enemigo
    var texto_enemigo = document.getElementById("NOME");
    var colorFondoE = sessionStorage.getItem("colorFondoEnemigo");
    texto_enemigo.style.backgroundColor = colorFondoE;
    var color_FE = document.getElementsByName("colorEnemigo")
    for (var i = 0; i < color_FE.length; i++) {
        if (color_FE[i].value == colorFondoE) {
            color_FE[i].checked = true;
        } else {
            color_FE[i].checked = false;
        }
    }


    //anotación jugador
    var anotabox = document.getElementById("anotabox")
    var anotacion_jugador = sessionStorage.getItem("anotabox")
    anotabox.value = anotacion_jugador

    // cursiva
    var seleccion_cursiva = document.getElementById("cursiva")
    var cursiva = sessionStorage.getItem('italicFont')
    cuerpo.style.fontStyle = cursiva
    if (seleccion_cursiva.value == cursiva) {
        seleccion_cursiva.checked = true
    } else {
        seleccion_cursiva.checked = false
    }

    // negrita
    var seleccion_negrita = document.getElementById("negrita")
    var negrita = sessionStorage.getItem('bolderFont')
    cuerpo.style.fontWeight = negrita
    if (seleccion_negrita.value == negrita) {
        seleccion_negrita.checked = true
    } else {
        seleccion_negrita.checked = false
    }
}