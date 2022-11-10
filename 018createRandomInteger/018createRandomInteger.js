"use strict";

/*018createRandomInteger.js/.html: Crea una función randomInteger(min, max) que 
genere un número entero aleatorio entre min y max incluyendo ambos, min y max, 
como valores posibles. Todo número del intervalo min..max debe aparecer con la 
misma probabilidad. Ejemplos de funcionamiento:*/

function randomInteger(min, max) {
  //Reutilizamos la función del anterior ejercicio y le hacemos un par de cambios:floor para que sea entero y + 1 para que incluya max
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Para comprobar que los números del intervalo aparecen con la misma probabilidad, vamos a registrar
//durante 50 llamadas a la función, las veces que se repite cada valor

//Como vamos a generar números del 1 al 5, creamos un array con 5 posiciones
let repeticiones = [0, 0, 0, 0, 0];

//Llamamos a la función random 50 veces y el valor que nos da será el index del array repeticiones
//Por ejemplo: random nos da 1. Pues en la posición 1 de repeticiones, sumamos 1
for (let i = 0; i < 50; i++) {
  let random = randomInteger(1, 5);
  //-1 porque el 0 no entraba en el rango
  repeticiones[random - 1]++;
}

for (let i = 0; i < repeticiones.length; i++) {
  //Si comprobamos los valores por consola veremos que las veces que se repiten son parecidas
  console.log(
    "El número " + (i + 1) + " se repite " + repeticiones[i] + " veces"
  );
}
