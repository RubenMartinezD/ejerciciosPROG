
// 1. programa que muestre si un numero es mayor o menor que 10
function ej1(){
var nume=prompt("Introduce un numerote")
if (nume>10) {alert("El número es mayor que 10")}
else if (nume<10) {alert("El número es menor que 10")}
else {alert("El número es igual que 10")}
}
// 2. programa que diga si pusiste b minúscula
function ej2(){
var pabala=prompt("Dígame una palabra")
string=pabala
if (string.includes("b")) {alert("Pues pusiste una 'b' minúscula")}
else {alert("Pues muy mal, no pusiste una 'b' minúscula")}
}
//  3. mostrar mensaje dadas variables
function ej3(){
var fechaanho=prompt("Dígame su año de nacimiento")
var actual=new Date().getFullYear()
if (fechaanho>=(actual-17)) {alert("Pues eres un menor de edad, seguro")}
else if (fechaanho==(actual-18)) {alert("Pues podrías ser un menor de edad, o no")}
else {alert("Pues eres un adulto")}
}

// 4. lista de la compra. mostrar precio al usuario del producto que seleccione
function ej4(){
var lidl=prompt("Bienvenido al sistema de comprobación de precios online. Teclee el número del producto del que desee conocer su precio:\n\n1. Patatas\n2. Patotas\n3. Patitos\n4. Potitos\n")
switch(lidl){
case "1":
    alert("Las patatas cuestan 3,56€/kilo")
    break
case "2": 
    alert("Las patotas cuestan 255€/kilo")
    break
case "3":
    alert("Las patitos cuestan 25€/pato")
    break
case "4":
    alert("Las potitos cuestan 0,0000000001€/molécula de potito")
    break
default: 
    alert("Ese producto no se encuentra en nuestra ilustre morada.\n\nVuélvalo a intentar, y asegúrese de escribir el número.")
} 
}
// 5. cálculo de áreas a demanda del usuario
function ej5(){
var fig=prompt("Bienvenido al sistema de calculación de áreas geométricas. Teclee el número de la forma de la que desee conocer su área:\n\n1. Triángulo\n2. Rectángulo\n3. Pentágono regular \n4. Hexágono regular\n")
switch(fig){
case "1":
    var base=prompt("Dime la longitud de la base (b) del triángulo")
    var altura=prompt("Dime la longitud de la altura (h) del triángulo")
    var area=(base*altura/2)
    alert(`El área de tu triángulo es de ${area} metros cuadrados`)
    break
case "2": 
    var base=prompt("Dime la longitud de la base (b) del rectángulo")
    var altura=prompt("Dime la longitud de la altura (h) del rectángulo")
    var area=(base*altura)
    alert(`El área de tu rectángulo es de ${area} metros cuadrados`)
    break
case "3":
    var base=prompt("Dime la longitud de un lado del pentágono")
    var altura=prompt("Dime la longitud de la apotema (ap, distancia hacia el centro) del pentágono")
    var area=((base*5*altura)/2)
    alert(`El área de tu pentágono es de ${area} metros cuadrados`)
    break
case "4":
    var base=prompt("Dime la longitud de un lado del hexágono")
    var altura=prompt("Dime la longitud de la apotema (ap, distancia hacia el centro) del hexágono")
    var area=((base*6*altura)/2)
    alert(`El área de tu hexágono es de ${area} metros cuadrados`)
    break
default: 
    alert("No es una figura geométrica válida. Inténtelo de nuevo.")
} 
}
// 6. decir si hay b, en caso afirmativo decir si hay p. Igulamente, decir si hay v y en caso afirmativo decir si hay u
function ej6(){
var frase=prompt("Dígame un verso de Miguel de Cervantes")
stringito=(frase.toLowerCase(frase))
if (stringito.includes("b")) 
    {alert("Pues pusiste una 'b'")
        if (stringito.includes("p")) 
            {alert("Pues también pusiste una 'p'")}
        else {alert("Pero no pusiste una 'p', sinvergüenza")}
    }
else if (!stringito.includes("b")) {alert ("No has puesto una mísera 'b'")}

if (stringito.includes("v")) 
    {alert("Pues pusiste una 'v'")
        if (stringito.includes("u")) 
            {alert("Pues también pusiste una 'u'")}
        else {alert("Pero no pusiste una 'u', sinvergüenza")}
    }
else if (!stringito.includes("v")) {alert ("Te olvidaste de la 'v', o eso espero")}

else {alert("No has puesto ninguna 'b' ni 'v'. Debería darte vergüenza")}
}
// 7. decir si es par o impar
function ej7(){
var nume=prompt("Introduce un numerito")
if ((nume%2)==0) {alert("El número es par")}
else {alert("El número es impar")}
}
// 8. potencias de 2
function ej8(){
var frase=prompt("Escriba su testamento aquí")
valorgitud=(frase.length)
if ((valorgitud%2)==0) {alert("Pues su testamento tiene un número de caracteres par")}
else if ((valorgitud%2)==1) {alert("Pues su testamento tiene un número de caracteres impar")}
else {alert("Algo raro ha pasado aquí. Consulte su exorcista más cercano")}

}
// 9. hacer funcionizar todo
encendido=1
while (encendido=1){
var ejer=prompt("Escriba el numerito correspondiente al ejercicio, del 1 al 8. Escribe 'salir' para salir")
if (ejer>0&&ejer<9) 
{
    var funcioncilla=("ej"+ejer)
    var fn= window[funcioncilla]
    fn()
}
else if (ejer=="salir"){encendido=0; break}
else {alert("Esto no entra dentro de mi jurisdicción")}
}