"use strict";

/* 012testCuriosity.js/.html: Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué? */

alert(9999999999999999);

/*Muestra: 10000000000000000 porque JavaScript representa los números en formato 64-bit IEEE-754,
Es decir, hay 64 bit para almacenar un número: 52 para los dígitos, 11 para la posición del punto decimal 
y 1 para el signo. 

Lo que ocurre en este caso es que hay más números de los que puede representar, se pasa de esos 52,
así que JavaScript ignora los dígitos "menos significativos". */
