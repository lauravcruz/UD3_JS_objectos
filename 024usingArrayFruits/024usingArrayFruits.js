"use strict";

/*024usingArrayFruits.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:*/

var fruits = ["Banana", "Manzana", "Fresa"];

fruits.unshift("Cereza"); //Añadimos cereza al principio
fruits.push("Melocotón"); //Añadimos melocotón al final

//Mostrar el array elemento a elemento con for clásico
console.log("ARRAY CLÁSICO: ");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.shift(); //Eliminamos el primer elemento.
fruits.pop(); //Eliminamos el último elemento.

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
console.log("FOR OF: ");
//El for of se usa para recorrer arrays. El for in se usa para objetos: recorre propiedades
for (let fruit of fruits) {
  console.log(fruit);
}
