"use strict";

//025usingArrayDisney.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:
let disney = [
  { nombre: "Hércules", pelicula: "Hércules" },
  { nombre: "Megana", pelicula: "Hércules" },
  { nombre: "Hades", pelicula: "Hércules" },
  { nombre: "Campanilla", pelicula: "Peter Pan" },
  { nombre: "Wendy", pelicula: "Peter Pan" },
];

//Meter a Peter Pan al final del array disney.
disney.push({
  nombre: "Peter Pan",
  pelicula: "Peter Pan",
});

//Pintar el array: vamos a hacer una función porque la vamos a necesitar más tarde
function pintarDisney() {
  for (let peli of disney) {
    document.write(
      "Nombre: " + peli.nombre + " Película: " + peli.pelicula + "<br>"
    );
  }
}
document.write("Primer for: <br>");
pintarDisney();

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({
  nombre: "El capitán Garfio",
  pelicula: "Peter Pan",
});

//TODO: ¿Es después de garfio o antes?
//Meter al cocodrilo detrás del capitán, no olvides la película
//Con splice podemos indicarle (index, elementos que borrar al principio, nuevo item)
disney.splice(1, 0, {
  nombre: "Cocodrilo",
  pelicula: "Peter Pan",
});

//Imprimimos el array para ver los cambios:
document.write(
  "<br>Comprobamos la inserción de Capitán garfio y Cocodrilo: <br>"
);
pintarDisney();

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
//Con filter podemos meter en un array nuevo SOLO los items que nos interesen de otro añadiéndoles la condición:
let peterPan = disney.filter((item) => item.pelicula === "Peter Pan");

document.write("<br>Personajes de Peter Pan: <br>");
for (let personajes of peterPan) {
  document.write(personajes.nombre + "<br>");
}

//Encontrar el índice de Campanilla.
//Para encontrar el índice de un elemento usamos findIndex(). Dentro pondremos la condición
document.write(
  "El índice de Campanilla es: " +
    disney.findIndex((personaje) => personaje.nombre == "Campanilla") +
    "<br>"
);

//TODO: esto es lo mismo que el anterior?
//Buscar al cocodrilo.
document.write(
  "El índice de Cocodrilo es: " +
    disney.findIndex((personaje) => personaje.nombre == "Cocodrilo") +
    "<br>"
);

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
function shuffle(array) {
  //A la función array.sort() podemos pasarle como argumento un método de ordenación
  //Estos funcionan en base a positivo/negativo. Para hacer el aleatorio jugaremos con esto:
  //Math.random() genera un número entre 0 y 1. Con -0.5 conseguiremos tener a veces un + y otras un -
  array.sort(() => Math.random() - 0.5);
}

//Vamos a probarlo:
shuffle(disney);
document.write("<br>Desordenamos el array: <br>");
pintarDisney();
