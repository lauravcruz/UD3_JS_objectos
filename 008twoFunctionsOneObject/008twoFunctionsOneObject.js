"use strict";

/*008twoFunctionsOneObject.js/.html: ¿Es posible crear las funciones A y B para que se 
cumpla new A() == new B()?

alert( a == b ); // true
Si es posible, entonces proporcione un ejemplo de código.
function A() { ... }
function B() { ... }
let a = new A();
let b = new B();*/

/*Cuando llamamos a una función constructora (con new) crea un this vacío y lo devuelve completo.
Si hacemos que ambas devuelvan EL MISMO objeto, la comparación determinará que es verdadera. 

Vamos a probar añadiendo un objeto al código del enunciado: */

let cObjeto = {};

function A() {
  return cObjeto;
}
function B() {
  return cObjeto;
}

let a = new A();
let b = new B();

alert(a == b);
