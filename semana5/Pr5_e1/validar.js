function compmultiplo (dinero){
    alert(dinero+" pelas ")
    if (dinero<0){
        alert("Lo sentimos, pero solo operamos con números positivos")
        exit
    }
    if ((dinero%5)!==0){
        alert("Lo sentimos, pero solo operamos en múltiplos de 5. Inténtelo de nuevo")
        exit
    }
    else 
        return dinero
}
