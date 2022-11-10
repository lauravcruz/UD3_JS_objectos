"use strict";

/*017createRandom.js/.html: La función incorporada Math.random() crea un valor 
aleatorio entre 0 y 1 (no incluyendo 1). Escribe una función random(min, max) para 
generar un número de punto flotante entre min y max (no incluyendo max). Ejemplos 
de su funcionamiento:
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525*/

alert(random(1, 5));

function random(min, max) {
  //Primero calculamos el número de posibilidades restándole al máximo valor, el mínimo
  //A ese total de posibilidades le multiplicamos un número aleatorio entre 0 y 1 (Math.random())
  return Math.random() * (max - min) + min;
}
