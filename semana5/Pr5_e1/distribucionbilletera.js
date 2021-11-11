function distribucionbilletera (dinero){
    alert("Se distribuirán billetes con valor de "+dinero)
var dondinero=dinero
function fbillete200(dondinero){
    var billete200=0
    while (dondinero!==0){
        if ((dondinero-200)>=0){
        dondinero=dondinero-200
        billete200++
        }
        else exit
    }
    return billete200
}

function fbillete100(dondinero){
    var billete100=0
    while (dondinero!==0){
        if ((dondinero-100)>=0){
        dondinero=dondinero-100
        billete100++
        }
        else exit
    }
    return billete100
}

function fbillete50(dondinero){
    var billete50=0
    while (dondinero!==0){
        if ((dondinero-50)>=0){
        dondinero=dondinero-50
        billete50++
        }
        else exit
    }
    return billete50
}

function fbillete20(dondinero){
    var billete20=0
    while (dondinero!==0){
        if ((dondinero-20)>=0){
        dondinero=dondinero-20
        billete20++
        }
        else exit
    }
    return billete20
}

function fbillete10(dondinero){
    var billete10=0
    while (dondinero!==0){
        if ((dondinero-10)>=0){
        dondinero=dondinero-10
        billete10++
        }
        else exit
    }
    return billete10
}

function fbillete5(dondinero){
    var billete5=0
    while (dondinero!==0){
        if ((dondinero-5)>=0){
        dondinero=dondinero-5
        billete5++
        }
        else exit
    }
    return billete5
}
fbillete200(dondinero)
fbillete100(dondinero)
fbillete50(dondinero)
fbillete20(dondinero)
fbillete10(dondinero)
fbillete5(dondinero)
alert("Se han retirado "+billete200+" billetes de 200 euros")
alert("Se han retirado "+billete100+" billetes de 100 euros")
alert("Se han retirado "+billete50+" billetes de 50 euros")
alert("Se han retirado "+billete20+" billetes de 20 euros")
alert("Se han retirado "+billete10+" billetes de 10 euros")
alert("Se han retirado "+billete5+" billetes de 5 euros")
}

/*function retirada_bill(valor){
    var billetes
    var isCero= false   //varibale booleana para decir si es cero
    var billete500, billete200, billete100, billete50, billete20, billete20, billete10, billete5
    while (!isCero){
        if (cantidad > 500){
        cantidad = cantidad -500
        }
        else  if (cantidad > 200){
        cantidad = cantidad -200
        }
    }
    return billetes


} /*
