"use strict";

/* 013sumVisitorNumbers.js/.html: Crea un script que pida al visitante que ingrese dos 
números y muestre su suma. P.D. Hay una trampa con los tipos de valores. */

let num = prompt("Introduzca un número");
let num2 = prompt("Introduzca un segundo número");

alert(num + num2);

//Si no indicamos expresamente que es un número, concatenará los números (1010)

//Añadimos (+) antes de prompt para que sepa que es un número y los sume:

let num3 = +prompt("Introduzca un número");
let num4 = +prompt("Introduzca un segundo número");

alert(num3 + num4);
