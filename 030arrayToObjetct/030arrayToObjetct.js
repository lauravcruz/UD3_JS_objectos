"use strict";

/*030arrayToObjetct.js/.html: Crea un objeto a partir de un array Supongamos que 
recibimos un array de personajes con la forma {id:..., nombre:..., pelicula:... }.
Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los 
elementos del array como valores. Dicha función es realmente útil cuando trabajamos 
con información del servidor.
Para esta actividad asumimos que cada id es único. No existen dos elementos del array 
con el mismo id.
Usa el método de array .reduce en la solución.*/

let personajes = [
  { id: 0, nombre: "Harry", pelicula: "Harry Potter y la piedra filosofal" },
  { id: 1, nombre: "Ralph", pelicula: "Rompe Ralph" },
  { id: 2, nombre: "Peter", pelicula: "Spider-man" },
  { id: 3, nombre: "Rafa", pelicula: "Ocho apellidos vascos" },
];

let objeto = groupById(personajes);

for (let key in objeto) {
  document.write(Object.values(objeto[key]) + "<br>");
}

function groupById(arr) {
  return arr.reduce((objeto, valor) => {
    //Recorre cada elemento de personajes y los asigna al objeto con su id como key
    objeto[valor.id] = valor;
    return objeto;
  }, {});
}
