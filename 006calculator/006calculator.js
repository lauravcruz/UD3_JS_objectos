"use strict";

/*006calculator.js/.html: Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.*/

let calculator = {
  a: 0,
  b: 0,
  read() {
    //Creamos a y b a partir de los datos que recojamos de un prompt
    this.a = +prompt("Introduzca un valor");
    this.b = +prompt("Introduzca otro valor");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.a + " + " + calculator.b + " = " + calculator.sum());
alert(calculator.a + " * " + calculator.b + " = " + calculator.mul());
