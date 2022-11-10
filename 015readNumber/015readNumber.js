"use strict";

/* 015readNumber.js/.html: Crea una función readNumber que pida un número hasta 
que el visitante ingrese un valor numérico válido. El valor resultante debe ser devuelto 
como number. El visitante puede también detener el proceso ingresando una línea 
vacía o presionando “CANCEL”. En tal caso la función debe devolver null. */

alert(readNumber());

function readNumber() {
  let num;
  num = prompt("Ingrese un número");

  //Mientras no sea un número válido, vuelve a pedir el dato
  while (!isFinite(num)) {
    num = prompt("Ingrese un número");
  }

  //Si es null(el usuario cancela) o entrega una línea en blanco, devuelve nulo. Si no, devuelve num de tipo número
  return num === null || num === "" ? null : +num;
}
