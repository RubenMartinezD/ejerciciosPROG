function main() {
    /// EJERCICIO 1 - Escribir frase después de la anterior
    explicacion_parte2 = "Te damos la bienvenida al curso.";
    texto_a_cambiar = document.getElementById("explicacion").innerHTML;
    texto_completo = texto_a_cambiar + explicacion_parte2;
    document.getElementById("explicacion").innerHTML = texto_completo;

    /// EJERCICIO 2- Modificar ancho de párrafos de clase standard
    var array_estandar = document.getElementsByClassName("standard");
    for (let i = 0; i < array_estandar.length; i++) {
        array_estandar[i].style.maxWidth = "500px";
    }

    /// EJERCICIO 3 - Añadir borde a tabla con id horario
    var tabla_horario = document.getElementById("horario");
    tabla_horario.style.border = "thick solid #0000FF";

    /// EJERCICIO 4 - Modificar el color de la fila de recreo de la tabla anterior
    var fila_recreo = document.getElementById("cuartaHora")
    fila_recreo.style.backgroundColor = "Orange";

    /// EJERCICIO 5- Centrar la clase asignaturas
    var array_asignaturas = document.getElementsByClassName("asignaturas");
    for (let i = 0; i < array_asignaturas.length; i++) {
        array_asignaturas[i].style.textAlign = "center";
    }
    /// EJERCICIO 6 - Modificar fuente del texto de bienvenida y subrayarlo
    var texto_bienvenida = document.getElementById("bienvenida");
    texto_bienvenida.style.fontFamily = "Verdana";
    texto_bienvenida.style.textDecoration = "underline";

    /// EJERCICIO 7 - Modificar las filas de la tabla
    for (let i = 1; i < 10; i++) {
        document.getElementsByTagName("tr")[i].setAttribute("style", "font-style: italic ;font-family:Helvetica;font-size:13");
    }
    var fila_dias = document.getElementById("dias");
    fila_dias.style.fontStyle = "Italic";
    var fila_1 = document.getElementById("primeraHora")
    fila_1.style.backgroundColor = "Cyan";
    var fila_2 = document.getElementById("segundaHora")
    fila_2.style.backgroundColor = "DarkTurquoise";
    var fila_3 = document.getElementById("terceraHora")
    fila_3.style.backgroundColor = "Cyan";
    var fila_recreo = document.getElementById("cuartaHora")
    fila_recreo.style.backgroundColor = "Orange";
    var fila_5 = document.getElementById("quintaHora")
    fila_5.style.backgroundColor = "Cyan";
    var fila_6 = document.getElementById("sextaHora")
    fila_6.style.backgroundColor = "DarkTurquoise";
    var fila_7 = document.getElementById("septimaHora")
    fila_7.style.backgroundColor = "Cyan";
    var fila_8 = document.getElementById("octavaHora")
    fila_8.style.backgroundColor = "DarkTurquoise";
    document.getElementsByTagName("tr")[0].setAttribute("style", "text-decoration: underline;font-family:papyrus");

    // EJERCICIO 8 - Crear nuevo párrafo
    var parrafo_nuevo = document.createElement("p"); //crear la etiqueta de párrafo (el contenedor)
    var contenido_texto = document.createTextNode("Los horarios son provisionales, están dispuestos a cambios."); // crear el nodo con el texto, que se añadirá al contenedor
    parrafo_nuevo.appendChild(contenido_texto); //añadir texto al contenedor de párrafo
    document.getElementById("segundaDivision").appendChild(parrafo_nuevo); //añadir la etiqueta final al documento, después de la div segundaDivisión

    /// EJERCICIO 9- Añadir asignaturas
    var li = document.createElement("li");
    var li_2 = document.createElement("li");
    var li_3 = document.createElement("li");
    var li1 = document.createTextNode("Diseño de interfaces web");
    var li2 = document.createTextNode("Despliegue de aplicaciones web");
    var li3 = document.createTextNode("Formación en centros de trabajo");
    li.appendChild(li1);
    document.getElementById("segundo").appendChild(li);
    li_2.appendChild(li2);
    document.getElementById("segundo").appendChild(li_2);
    li_3.appendChild(li3);
    document.getElementById("segundo").appendChild(li_3);

    /// EJERCICIO EXTRA
    var doc = document.getElementsByTagName("body")
    doc[0].style.textAlign = "Justified"
    doc[0].style.width = "600px"
    var imagen = document.createElement("img")
    imagen.src = "https://espai.stucom.com/tecnologia/wp-content/uploads/sites/2/desarrollo-de-aplicaciones-web-services-jaen-480x432.jpg"
    imagen.width = 200
    imagen.setAttribute("style", "margin-left: 200px;");
    document.getElementById("bienvenida").appendChild(imagen)
}


main()