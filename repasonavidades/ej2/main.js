/**
 * Función principal para el cálculo de polinomios de segundo grado
 */
function main() {
    var a = parseInt(prompt("Dime el valor de a del polinomio"));
    var b = parseInt(prompt("Dime el valor de b del polinomio"));
    var c = parseInt(prompt("Dime el valor de c del polinomio"));
    var dividendomas = calculodivmas(a, b, c);
    var dividendomenos = calculodivmenos(a, b, c);
    var divisor = (2 * a)
    var operacioncuadraticamas = (dividendomas / divisor);
    var operacioncuadraticamenos = (dividendomenos / divisor);
    resultado = alert("Los resultados del polinomio son " + operacioncuadraticamas + " y " + operacioncuadraticamenos);
}
main()