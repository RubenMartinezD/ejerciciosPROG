function distribucionbilletera (dinero){
    var dinero=dinero
    var isCero=false
    var billete5=0, billete10=0, billete20=0, billete50=0, billete100=0, billete200=0, billete500=0
    while (!isCero){
        if (dinero >= 500){
            dinero=dinero-500
            billete500++
        }
        else if (dinero >= 200){
            dinero=dinero-200
            billete200++
        }
        else if (dinero >= 100){
            dinero=dinero-100
            billete100++
        }
        else if (dinero >= 50){
            dinero=dinero-50
            billete50++
        }
        else if (dinero >= 20){
            dinero=dinero-20
            billete20++
        }
        else if (dinero >= 10){
            dinero=dinero-10
            billete10++
        }
        else if (dinero >= 5){
            dinero=dinero-5
            billete5++
        }
        else {isCero = true}
}

var Salidabilletes
Salidabilletes = alert("Se han retirado "+billete500+" billetes de 500 euros\n"+
"Se han retirado "+billete200+" billetes de 200 euros\n"+
"Se han retirado "+billete100+" billetes de 100 euros\n"+
"Se han retirado "+billete50+" billetes de 50 euros\n"+
"Se han retirado "+billete20+" billetes de 20 euros\n"+
"Se han retirado "+billete10+" billetes de 10 euros\n"+
"Se han retirado "+billete5+" billetes de 5 euros")

return Salidabilletes
}

/*function retirada_bill(cantidad){
    var cantidad = cantidad
    var billetes
    var isCero= false   //varibale booleana para decir si es cero
    var billete500 = 0 , billete200 = 0 , billete100, billete50, billete20, billete20, billete10, billete5
    while (!isCero){
        if (cantidad >= 500){
        cantidad = cantidad -500
        }
        else  if (cantidad >= 200){
        cantidad = cantidad -200
        }
    // CONTINUAR
        else{ isCero=true }
    }
     billetes = "500" -> "+billete500+"\n200 -> "+billete200+"\n100 -> "+billete100+"\n50 -> "+billete50+"\n20 -> "+billete20+"\n10 -> "+billete10+"\n5 -> "+billete5
    return billetes
   }
   
   function multiplo_de_5_0(cantidad){
   var cantidad_a_testar = cantidad
   if ((cantidad_a_testar%5)!==0){
   isMultiplo = True
   }
   return isMultiplo
   }


} */
