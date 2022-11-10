"use strict";

/* 014fixNumbers.js/.html: ¿Por qué 6.35.toFixed(1) == 6.3? Según la documentación 
Math.round y toFixed redondean al número más cercano: 0..4 hacia abajo mientras 
5..9 hacia arriba. Por ejemplo: */

alert((1.35).toFixed(1)); // 1.4
//Porque el parámetro que recibe .toFixed indica el número de decimales. Si ponemos 1, solo mostrará el primero

/*En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?*/
alert((6.35).toFixed(10)); //6.3

//¿Cómo redondear 6.35 de manera correcta?
alert((6.35).toFixed(1));
