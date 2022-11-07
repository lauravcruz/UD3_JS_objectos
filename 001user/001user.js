"use strict";

//001user.js/.html:  Escribe el código, una línea para cada acción:

//Crea un objeto user vacío.
let user = {}; //Usamos dos llaves vacías para crear un objeto literal

// Agrega la propiedad name con el valor John Snow.
user.name = "John Snow"; //Con el nombre del objeto y "." accedemos/creamos propiedades
console.log(user.name);

// Agrega la propiedad surname con el valor Sam Sagaz.
user.surname = "Sam Sagaz";
console.log(user.surname);

// Cambia el valor de name a Peter Pan.
user.name = "Peter Pan";
console.log(user.name);

// Quita la propiedad name del objeto.
delete user.name; //Delete + objeto + propiedad borra la propiedad de un objeto
console.log(user.name);
