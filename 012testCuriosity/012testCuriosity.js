"use strict";

/* 012testCuriosity.js/.html: Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué? */

alert(9999999999999999);

/*Muestra: 10000000000000000 porque JavaScript solo almacena números de 64-bit IEEE-754. 
Lo que hace es mostrar el siguiente número entero más cercano al 9999999999999999*/

//TODO: mejorar esto