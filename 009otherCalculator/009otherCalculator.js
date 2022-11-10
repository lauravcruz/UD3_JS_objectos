"use strict";

/*009otherCalculator.js/.html: Crear una función constructora Calculator que crea 
objetos con 3 métodos:
read() pide dos valores usando prompt y los guarda en las propiedades del objeto con 
los nombres a y b.
sum() devuelve la suma de estas propiedades.
mul() devuelve el producto de la multiplicación de estas propiedades.
Por ejemplo:*/

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
  //Dentro de una función "constructora" podemos crear métodos que creen objetos
  //Hacemos que la propiedad "read" sea una función que defina las propiedades a y b
  this.read = function () {
    this.a = +prompt("Introduzca el valor de a");
    this.b = +prompt("Introduzca el valor de b");
  };
  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}