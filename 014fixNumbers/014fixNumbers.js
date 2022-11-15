"use strict";

/* 014fixNumbers.js/.html: ¿Por qué 6.35.toFixed(1) == 6.3? Según la documentación 
Math.round y toFixed redondean al número más cercano: 0..4 hacia abajo mientras 
5..9 hacia arriba. Por ejemplo: */

alert((1.35).toFixed(1)); // 1.4

/*En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?*/
alert((6.35).toFixed(10)); //6.3

//Si vemos más decimales podremos intuir por qué hace estos redondeos:
alert((1.35).toFixed(20)); //1.35000000000000008882
alert((6.35).toFixed(20)); //6.34999999999999964473

//Las fracciones decimales se almacenan con pérdida de precisión:
//En el caso del 1.35, la pérdida de precisión hace que el número sea mayor, así que se redonde hacia arriba
//En cambio, el 6.35 es 6.34... De ahí que se quede en 6.3

//¿Cómo redondear 6.35 de manera correcta?
//Para evitar la pérdida de precisión, tenemos que llevar el número lo más cerca posible de un entero:
//Cuando la parte decimal de un número es 0.5 es 1/2. Una fracción dividida entre 2 no tendrá impresiciones:
alert(Math.round(6.35 * 10) / 10);
