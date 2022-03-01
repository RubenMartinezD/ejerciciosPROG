function main() {
    var DNI = document.getElementById('DNI')
    var nombre = document.getElementById('nombre')
    var apellidos = document.getElementById('apellidos')
    var edad = document.getElementsByClassName('radio')
        // var estado = document.getElementById('estado')
    var aficiones = document.getElementsByClassName('check')
    var labels = document.getElementsByTagName('label')
    var comentarios = document.getElementById('comentarios')
    var enviar = document.getElementById('envio')
    var reset = document.getElementById('reset')
        //  var formulario = document.getElementById('formulario')
        // var valor

    // EJERCICIO 1 

    enviar.addEventListener('click', () => {
        comprobaNumeros(nombre);
        comprobaNumeros(apellidos);

    })

    function comprobaNumeros(valor) {
        var numeros = /[0-9]/;
        if (numeros.test(valor.value)) {
            alert('Los valores numéricos no están admitidos en los campos "Nombre" ni "Apellidos"');
        }
    }

    // EJERCICIO 2

    enviar.addEventListener('click', () => {
        comprobarDNI(DNI);

    })

    function comprobarDNI(DNI) {
        if (!(DNI.value.length === 9)) {
            alert("El DNI no tiene 9 caracteres. Introdúcelo de nuevo.")
        }
    }

    // EJERCICIO 3

    for (let n = 0; n < aficiones.length; n++) {
        aficiones[n].addEventListener('click', () => {
            dosAficiones()
        })
    }

    function dosAficiones() {
        valor = 0
        for (let i = 0; i < aficiones.length; i++) {
            if (aficiones[i].checked) {
                valor++
            }
            if (valor > 2) {
                aficiones[i].checked = false
                salida('Lo sentimos, no se permiten más de dos aficiones.')
                break
            }
        }
    }

    // EJERCICIO 4

    for (let n = 0; n < edad.length; n++) {
        edad[n].addEventListener('click', () => {
            targetAficiones(n)
        })
    }

    function targetAficiones(edad) {
        switch (edad) {
            case 0:
                { // se cogen las posiciones ocupadas en orden de aparción por los labels del html (como en un array) y se sustituyen los valores corresponientes a las aficiones
                    labels[9].innerHTML = '<input type="checkbox" class="check" checked>Minecraft'
                    labels[10].innerHTML = '<input type="checkbox" class="check">Fortnite'
                    labels[11].innerHTML = '<input type="checkbox" class="check">Roblox'
                    labels[12].innerHTML = '<input type="checkbox" class="check">Among us'
                }
                break
            case 1:
                {
                    labels[9].innerHTML = '<input type="checkbox" class="check">Dormir'
                    labels[10].innerHTML = '<input type="checkbox" class="check" checked>Emborracharse'
                    labels[11].innerHTML = '<input type="checkbox" class="check">Odiar la pizza con piña'
                    labels[12].innerHTML = '<input type="checkbox" class="check">Ver Twitch'
                }
                break
            case 2:
                {
                    labels[9].innerHTML = '<input type="checkbox" class="check">Petanca'
                    labels[10].innerHTML = '<input type="checkbox" class="check" checked>Crucigramas'
                    labels[11].innerHTML = '<input type="checkbox" class="check">Escuchar a Camilo Sesto'
                    labels[12].innerHTML = '<input type="checkbox" class="check">Hacer ejercicio'
                }
                break
            default:
                break
        }
    }

    // EJERCICIO 5

    enviar.addEventListener('click', () => {
        comprobarCaracteres(comentarios);

    })

    function comprobarCaracteres(comentarios) {
        if (comentarios.value.length >= 250) {
            (comentarios.value = comentarios.value.substring(0, 249))
            alert("sobrepasate el limite de caracteres")
        }

    }

    // EJERCICIO 6

    reset.addEventListener('click', () => {
        resetearFormulario()
    })

    function resetearFormulario() {
        //  formulario.reset();
        location.reload();

    }

}
main()