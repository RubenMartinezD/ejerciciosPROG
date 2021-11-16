function preguntavolver(){
var pregunta = prompt("Quieres volver a intentarlo?\n s - Si\n n - no")
if (pregunta == "s")
    {var respuesta=true}
else if (pregunta == "n")
    {var respuesta=false}
if (respuesta)
    {main()}
else if (!respuesta)
    {alert("Pues hasta luego")}
}