"use strict";

/*028mapToName.js/.html: Tienes un array de objetos bands, cada uno tiene 
band.name. Escribe el código que lo convierta en un array de nombres. Por ejemplo:*/

let acdc = { name: "ACDC", age: 25 };
let metallica = { name: "Metallica", age: 30 };
let guns = { name: "Guns and Roses", age: 28 };
let bands = [acdc, metallica, guns];

//Para convertir bands en un array SOLO de nombres usamos .map().
//Por parámetro le indicamos la condición: sacar solo "name". Recorrerá el array buscándolos y devolverá los bands.name en un array
let names = bands.map((bands) => bands.name);
