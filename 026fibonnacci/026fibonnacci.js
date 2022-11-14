"use strict";

/*026fibonnacci.js/.html: Crear un array que contenga los 20 primeros números de 
Fibonacci.*/
let fibonacci20 = [];

for (let i = 1; i <= 20; i++) {
  fibonacci20[i - 1] = toFibonacci(i);
}

console.log(fibonacci20);

function toFibonacci(posicion) {
  if (posicion == 1) {
    return 1;
  } else if (posicion == 0) {
    return 0;
  } else {
    //Como la serie de fibonacci es la suma de los dos últimos términos, hacemos una
    //función recursiva que haga esta operación
    return toFibonacci(posicion - 1) + toFibonacci(posicion - 2);
  }
}
