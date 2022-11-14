"use strict";

/*029practiceWithBands.js/.html: Ejecuta sobre el siguiente array las operaciones 
pedidas:*/
var grupos = [
  { nombre: "ACDC", genero: "Rock" },
  { nombre: "Cold Play", genero: "Pop" },
  { nombre: "NCT Dream", genero: "K-Pop" },
  { nombre: "Metallica", genero: "Heavy Metal" },
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let heavyMetal = grupos.filter((bands) => bands.genero === "Heavy Metal");

//Como devuelve un array con los nombres encontrados, tenemos que recorrerlo para poder mostrarlo:
for (let banda of heavyMetal) {
  document.write("Grupos de Heavy Metal: " + banda.nombre);
}

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let coldplay = grupos.find((bands) => bands.nombre == "Cold Play");

//En este caso nos devuelve el objeto, no un array, así que podemos acceder directamenete a las propiedades
document.write("<br> " + coldplay.nombre);

//¿En qué posición del array se encuenta “Cold Play”?
document.write(
  "Cold Play está en la posición: " + grupos.findIndex((bands) => bands.nombre === "Cold Play")
);