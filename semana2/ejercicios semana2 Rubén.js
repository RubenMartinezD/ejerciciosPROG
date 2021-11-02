// 1. calcular área de rectángulo
var altura=13
var base=7
var area=(base*altura)
alert("El área del rectángulo es de " + area + " cm")

// 2. calcular area y longitud de circunferencia dado radio
var radio=5
var area=(Math.PI*(radio**2))
var longitud=(2*Math.PI*radio)
alert("El área de una circunferencia con un radio de " + radio + " centímetros es de " + area + " cm cuadrados y su longitud es de " + longitud + "cm")

//  3. mostrar mensaje dadas variables
var nombre="Pericote de los palitos"
var ciudad="La Guardia Civil"
var gusto="Café desnatado y leche descafeinada"
alert("Hola, mi nombre es " + nombre + "\n Soy de " + ciudad + "\n Lo que más me gusta es " + gusto)

// 4. ejercicio 1 pero las variables las da el usuario
var altura=prompt("Introduce la altura del rectángulo")
var base=prompt("Introduce la base del rectángulo")
var area=(base*altura)
alert("El área del rectángulo es de " + area + " cm")

// 5. ejercicio 2 pero las variables las da el usuario
var radio=prompt("Introduce el radio de la circunferencia")
var area=(Math.PI*(radio**2))
var longitud=(2*Math.PI*radio)
alert("El área de una circunferencia con un radio de " + radio + " centímetros es de " + area + " cm cuadrados y su longitud es de " + longitud + "cm")

// 6. ejercicio 3 pero las variables las da el usuario
var nombre=prompt("Introduce el nombre del sujeto")
var ciudad=prompt("Introduce la procedencia del receptáculo")
var gusto=prompt("Introduce la cosa favorita de la marioneta")
alert("Hola, mi nombre es " + nombre + "\n Soy de " + ciudad + "\n Lo que más me gusta es " + gusto)

// 7. recoger un valor y mostrar su módulo
var dividendo=prompt("Introduce el dividendo")
var divisor=prompt("Introduce el divisor")
var modulo=dividendo%divisor
alert("El resto de la división es " + modulo)

// 8. potencias de 2
var potencio=prompt("Introduce la potencia a la que quieres elevar 2")
var resultado=2**potencio
alert("El resultado de la potencia es " + resultado)

// 9. comparativa datos
var dat1=prompt("Introduce el primer dato")
var dat2=prompt("Introduce el segundo dato")
if (dat1==dat2) {alert("Los datos introducidos son iguales")}
else {alert("Los datos introducidos son distintos")}

// 10. comparativa datos
var dat1=prompt("Introduce el primer dato")
var dat2=prompt("Introduce el segundo dato")
if (dat1==dat2) {alert("Los datos introducidos son iguales")}
else {alert("Los datos introducidos son distintos")}

// 11. comparativa datos. avisar si son iguales
var dat1=prompt("Introduce el primer dato")
var dat2=prompt("Introduce el segundo dato")
var dat3=prompt("Introduce el tercer dato")
if ((dat1==dat2)|(dat1==dat3)|(dat2==dat3)) {alert("Al menos dos de los datos introducidos son iguales")}
else {alert("Los datos introducidos son distintos")}

// 12. recoger un dato, incremenetarlo en 1, pedir otro dato y multiplicarlo por el primero, ya incrementado.
var dat1=prompt("Introduce el primer dato. Se le sumará 1")
var dat2=prompt("Introduce el segundo dato. Se multiplicará por el primero")
dat1++
var datomejorado=dat1 //var datomejorado=dat1++ no funciona, hay que definir dat1++ antes
var resultado=(datomejorado*dat2)
alert("El resultado de la operación es " + resultado)

// 13. calculo de año nacimiento
var edad=prompt("Introduce tu edad")
var actual=new Date().getFullYear()
var posiblea1=actual-edad
var posiblea2=actual-edad-1
alert("Pues entonces debiste nacer en el " + posiblea2 + " o en el " + posiblea1)

// 14. calcular si tiene edad para conducir
var edad=prompt("Introduce tu edad")
edad>=18? alert("Se puede sacar el carnet de conducir"):alert("No puede sacar el carnet de conducir")

// 15. tablas de multiplicar
var num=prompt("Dame un numerote para multiplicar")
for (let i = 1; i <= 9; i++){
    resultado=num*i
    alert(num + " multiplicado por " + i + " es " + resultado)
}