alert("Bienvenidx! Para calcular la cantidad de trades que necesita para lograr su objetivo, ingrese a continuacion los datos solicitados. Ingrese únicamente caracteres alfanúmericos.");

let inversion = parseInt (prompt("Ingrese el capital inicial")) ;
let ganancia = parseInt(prompt("Ingrese el porcentaje de ganancia deseado en cada movimiento")) ;
let objetivo = parseInt(prompt("Ingrese el capital que desea lograr")) ;
let interes = prompt("¿Desea aplicar interes compuesto a sus trades?");
let trade = 0;

let cont = 0;

function gananciaTrade(valor1, valor2) {
        return valor1 * (valor2 / 100);
    } 

if (interes == "si" || interes == "SI") {

    while (inversion < objetivo) {
        trade = gananciaTrade(inversion, ganancia);
        inversion = inversion + trade;
        cont = cont + 1;
 
        console.log("Trade Nº: " + cont + " Valor: " + trade + " Total acumulado: " + inversion);
    }

alert("Para lograr tu objetivo de " + objetivo + " dolares, necesitas " + cont + " trades exitosos.");
}    

else if  (interes == "no" || interes == "NO") {
    let capitalTotal = inversion;

    while (capitalTotal < objetivo) {
        trade = gananciaTrade(inversion, ganancia);
        capitalTotal = capitalTotal + trade;
        cont = cont + 1;
            
        console.log("Trade Nº: " + cont + " Valor: " + trade + " Total acumulado: " + capitalTotal);
    }

alert("Para lograr tu objetivo de " + objetivo + " dolares, necesitas " + cont + " trades exitosos.");
}   

else {
    alert("ERROR. Oprima la tecla F5 para volver a empezar.");
}
    
    