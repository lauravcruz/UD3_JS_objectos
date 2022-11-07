"use strict";

/*003sumProperties.js/.html: Tenemos un objeto que almacena los salarios de nuestro 
equipo:

Escribe el código para sumar todos los salarios y almacenar el resultado en la variable 
sum. En el ejemplo de arriba nos debería dar 390. Si salaries está vacío entonces el 
resultado será 0.*/

let salaries = {
  Harry: 100,
  Ron: 160,
  Hermione: 130,
};

//Inicializamos en 0 para cuando el objeto esté vacío
let sum = 0;

//En JS podemos recorrer las propiedades con un for...in:
for (let mago in salaries) {
  sum += salaries[mago];
}

alert("Los salarios de los magos son: " + sum + " ");
