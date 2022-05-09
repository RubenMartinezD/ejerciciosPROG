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

nombre.addEventListener('input', updateNombre)
apellido.addEventListener('input', updateApellido)
edad.addEventListener('input', updateEdad)
nota.addEventListener('input', updateNota)
let registro_formulario = function(event) {
    alert("Se enviaron los siguientes datos:\nNombre: " + nombre.value + "\nApellidos: " + apellido.value + "\nEdad: " + edad.value + "\nNota: " + nota.value);
    $.ajax({
        data: {
            "nombre": nombre.value,
            "apellido": apellido.value,
            "edad": edad.value,
            "nota": nota.value
        },
        url: 'main.php',
        type: 'post',
        success: function(response) {
            $("#respuesta").html(response);
        }
    });
    event.preventDefault();
}
boton_registro.addEventListener("click", registro_formulario)