"use strict";

/* 016fixInfinityLoop.js/.html: Este bucle es infinito. Nunca termina, ¿por qué?*/

/*Nunca termina porque la i nunca llega a 10 exacto, que es la condición para finalizar el bucle. 
Al ir incrementando la variable en 0.2, los decimales van alterando el resultado. Si debbugeamos en el navegador, 
veremos que la cifra más aproximada al 10 sería el 10.199999999999996. De hecho, si ponemos esto como 
condición, el bucle será finito: */

let i = 0;
while (i != 10.199999999999996) {
  console.log(i);
  i += 0.2;
}

