/**
    * Función para repartir el dinero a retirar de forma eficiente
    * @param {number} dinero - Es el dinero dado de antes por el usuario
    * @type {boolean} isCero - Si se cumple, se dejan de contar billetes 
    * @type {number} billete500 - Número de billetes contados con valor de 500 euros
    * @type {number} billete200  - Número de billetes contados con valor de 200 euros
    * @type {number} billete100 - Número de billetes contados con valor de 100 euros
    * @type {number} billete50 - Número de billetes contados con valor de 50 euros
    * @type {number} billete20 -  Número de billetes contados con valor de 20 euros
    * @type {number} billete10 -  Número de billetes contados con valor de 10 euros
    * @type {number} billete5 - Número de billetes contados con valor de 5 euros
    * @returns {string}  Salidabilletes - Frase que indica los billetes contados
*/

function distribucionbilletera(dinero) {
    var dinero = dinero
    var isCero = false
    var billete5 = 0, billete10 = 0, billete20 = 0, billete50 = 0, billete100 = 0, billete200 = 0, billete500 = 0
    while (!isCero) {
        if (dinero >= 500) {
            dinero = dinero - 500
            billete500++
        }
        else if (dinero >= 200) {
            dinero = dinero - 200
            billete200++
        }
        else if (dinero >= 100) {
            dinero = dinero - 100
            billete100++
        }
        else if (dinero >= 50) {
            dinero = dinero - 50
            billete50++
        }
        else if (dinero >= 20) {
            dinero = dinero - 20
            billete20++
        }
        else if (dinero >= 10) {
            dinero = dinero - 10
            billete10++
        }
        else if (dinero >= 5) {
            dinero = dinero - 5
            billete5++
        }
        else { isCero = true }
    }

    var Salidabilletes
    Salidabilletes = alert("Se han retirado " + billete500 + " billetes de 500 euros\n" +
        "Se han retirado " + billete200 + " billetes de 200 euros\n" +
        "Se han retirado " + billete100 + " billetes de 100 euros\n" +
        "Se han retirado " + billete50 + " billetes de 50 euros\n" +
        "Se han retirado " + billete20 + " billetes de 20 euros\n" +
        "Se han retirado " + billete10 + " billetes de 10 euros\n" +
        "Se han retirado " + billete5 + " billetes de 5 euros")

    return Salidabilletes
}