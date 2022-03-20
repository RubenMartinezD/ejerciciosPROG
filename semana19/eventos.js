function cambiaTexto(event) {
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.style.fontSize = event.currentTarget.value;
    localStorage.setItem("tamFuente", event.currentTarget.value);
}

function cambiaColorHeroe(event) {
    var texto_heroe = document.getElementById("NOMH");
    texto_heroe.style.color = event.currentTarget.value;
    sessionStorage.setItem("colorTH", event.currentTarget.value);

}

function guardarAnotacion() {
    var anotabo = document.getElementById("anotabox")
    var anotabox = anotabo.value
    sessionStorage.setItem("anotabox", anotabox)

}

function comprobarNombre() {
    var texto_hero = document.getElementById("NOMH");
    let texto_heroe = texto_hero.value
    if (texto_heroe == '' || texto_heroe == null) {
        var nomheroe = prompt("Dame el nombre del héroe");
    } else {
        let preguntanombre = prompt("Ya hay un héroe creado. ¿Te gustaría cambiar el nombre de " + texto_heroe + " ?")
        if (preguntanombre == "s" || preguntanombre == "si" || preguntanombre == "SI" || preguntanombre == "S" || preguntanombre == "sí" || preguntanombre == "SÍ") {
            var nomheroe = prompt("Dame el nombre del héroe");
        } else { nomheroe = texto_heroe }
    }
    return nomheroe;
}

function guardaHeroe(event) {
    var texto_heroe = document.getElementById("NOMH");
    texto_heroe.value = event.currentTarget.value;
    console.log("El valor_heroe en guardaheroe es " + texto_heroe)
    console.log("El valor_heroe (value) en guardaheroe es " + valor_heroe)
    sessionStorage.setItem("NOMH", event.currentTarget.value);

}

function cambiaFondoHeroe(event) {
    var texto_heroe = document.getElementById("NOMH");
    texto_heroe.style.backgroundColor = event.currentTarget.value;
    sessionStorage.setItem("colorFondoHeroe", event.currentTarget.value);
}

function cambiaFondoEnemigo(event) {
    var texto_enemigo = document.getElementById("NOME");
    texto_enemigo.style.backgroundColor = event.currentTarget.value;
    sessionStorage.setItem("colorFondoEnemigo", event.currentTarget.value);
}


function borrarSesion() {
    sessionStorage.clear();
    location.reload();
}

function cambiaCursiva(event) {
    var seleccion_cursiva = document.getElementById("cursiva")
    if (seleccion_cursiva.checked) {
        cuerpo.style.fontStyle = event.currentTarget.value
        sessionStorage.setItem('italicFont', event.currentTarget.value)
    } else {
        cuerpo.style.fontStyle = 'normal'
        sessionStorage.setItem('italicFont', 'normal')
    }

}

function cambiaNegrita(event) {
    var seleccion_negrita = document.getElementById("negrita")
    if (seleccion_negrita.checked) {
        cuerpo.style.fontWeight = event.currentTarget.value
        sessionStorage.setItem('bolderFont', event.currentTarget.value)
    } else {
        cuerpo.style.fontWeight = 'normal'
        sessionStorage.setItem('bolderFont', 'normal')
    }
}