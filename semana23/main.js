let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let edad = document.getElementById("edad")
let nota = document.getElementById("nota")
let boton_registro = document.getElementById("registroini")

function updateNombre(e) {
    nombre.textContent = e.srcElement.value;
}

function updateApellido(e) {
    edad.textContent = e.srcElement.value;
}

function updateEdad(e) {
    apellido.textContent = e.srcElement.value;
}

function updateNota(e) {
    nota.textContent = e.srcElement.value;
}


console.log(nombre)
let registro_formulario = function(event) {
    nombre.addEventListener('input', updateNombre)
    apellido.addEventListener('input', updateApellido)
    edad.addEventListener('input', updateEdad)
    nota.addEventListener('input', updateNota)
    $.ajax({
        data: {
            "nombre": nombre,
            "apellidos": apellido,
            "edad": edad,
            "nota": nota,
        },
        url: 'main.php',
        type: 'post',
        success: function(response) {
            $("#response").html(response);
        }
    });
    alert("Se pulsó el botón de envío con la información:\nNombre: " + nombre.value + "\nApellidos: " + apellido.value + "\nEdad: " + edad.value + "\nNota: " + nota.value);
    event.preventDefault()
}

boton_registro.addEventListener("click", registro_formulario)




/* var nombre = prompt("Introduce tu nombre");
 var edad = prompt("Introduce tu edad");
 $.ajax({
     data: { "nombre": nombre, "edad": edad },
     url: 'main.php',
     type: 'post',
     success: function(response) {
         $("#respuesta").html(response);
     }
 });


 function __main__() {
    boton_registro = document.getElementById('Registroini')
    document.getElementById('Registroini').addEventListener('click', evento_envio)

    function evento_envio() {
        alert("Se han enviado la siguientes datos:\n" +
            "Nombre:" + document.getElementById("nombre").value +
            "\nApellidos:" + document.getElementById("apellido").value +
            "\nEdad:" + document.getElementById("edad").value +
            "\nNota:" + document.getElementById("nota").value)

    }
}


__main__()
 */