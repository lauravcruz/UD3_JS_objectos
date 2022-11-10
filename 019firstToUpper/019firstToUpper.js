"use strict";

/*019firstToUpper.js/.html: Escribe una función ucFirst(str) que devuelva el string str con 
el primer carácter en mayúscula, por ejemplo:*/
alert(ucFirst("john") == "John");

function ucFirst(str) {
  //El primer caracter en mayúscula haciendo toUpperCase al caracter de la posición 0
  // y el resto de la palabra lo sacamos con slice (parámetro: desde qué posición cortamos)
  return str.charAt(0).toUpperCase() + str.slice(1);
}
