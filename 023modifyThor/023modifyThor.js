"use strict";

/*023modifyThor.js/.html: Contesta los siguientes comentarios con respecto a la cadena 
que contiene la variable thor: */

let thor = "Thor es el hijo de Odín";

alert("Largo de la cadena: " + thor.length); // Largo de la cadena
//TODO: preguntar si hay que encontrar index de la o o verificar que esté
alert("Encontrar la o: " + thor.indexOf("o")); //Encontrar la letra o T
alert("Carácter en la posición 3: " + thor.charAt(3)); //Encontrar el carácter que ocupa la posición 3
alert("Carácter en la posición 1: " + thor.charAt(1)); //¿Qué carácter ocupa la posición 1?

//Trocea la cadena usando los espacios en blanco
//Usamos split y le indicamos la condición del corte: espacio en blanco. Los trozos se guardan en el array
let thorzos = thor.split(" ");

alert("Trocitos de Thor: ");
for (let trozo of thorzos) {
  alert(trozo);
}

alert(thor.replace("Thor", "Loki")); //Reemplaza Thor por Loki

//Recorta la cadena para que devuelva la palabra Odín
//Usamos slice con número negativo para que empiece a contar x pasos desde el final
alert(thor.slice(-4));

//¿Puedes encontrar la letra a? Demuéstralo
//Como no existe, nos dará un valor negativo
alert(thor.indexOf("a"));

//TODO: preguntar si mayúscula. O cani?
//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
