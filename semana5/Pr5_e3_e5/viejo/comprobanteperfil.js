function comprobanteperfil(){
    
    var comprobanteperfil= prompt("Son estos datos correctos?\n s - Sí\n n - No")
        switch(comprobanteperfil){
            case "s":
                alert("Bien, buen chico")
                break
            case "n": 
                alert("Ups...")
                break
            default: 
                alert("Excepción no controlada. Terrible, apocalítico")
            } 
        }
