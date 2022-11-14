"use strict";

/*023modifyThor.js/.html: Contesta los siguientes comentarios con respecto a la cadena 
que contiene la variable thor: */

let thor = "Thor es el hijo de Odín";

document.write("Largo de la cadena: " + thor.length + "<br>"); // Largo de la cadena

//Encontrar la letra o
let posicionO = [];

for (let i = 0; i < thor.length; i++) {
  if (thor[i] === "o" || thor[i] == "O") {
    posicionO.push(i);
  }
}
document.write(
  "La letra O está en las posiciones: " + posicionO.toString() + "<br>"
);

document.write("Carácter en la posición 3: " + thor.charAt(3) + "<br>"); //Encontrar el carácter que ocupa la posición 3
document.write("Carácter en la posición 1: " + thor.charAt(1) + "<br>"); //¿Qué carácter ocupa la posición 1?

//Trocea la cadena usando los espacios en blanco
//Usamos split y le indicamos la condición del corte: espacio en blanco. Los trozos se guardan en el array
let thorzos = thor.split(" "); // perdón por el chiste malo

document.write("<br>" + "Trocitos de Thor: ");
for (let trozo of thorzos) {
  document.write(trozo + "<br>");
}

document.write(
  "<br>Reemplazamos Loki por Thor: " + thor.replace("Thor", "Loki") + "<br>"
); //Reemplaza Thor por Loki

//Recorta la cadena para que devuelva la palabra Odín
//Usamos slice con número negativo para que empiece a contar x pasos desde el final
document.write("<br>Recortamos la cadena: " + thor.slice(-4) + "<br>");

//¿Puedes encontrar la letra a? Demuéstralo
//Como no existe, nos dará un valor negativo
document.write("<br>Encontrar la letra a: " + thor.indexOf("a") + "<br>");

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
document.write(
  "<br>Mitad de la cadena en mayúscula: " +
    //Calculamos la mitad de la cadena con length/2
    thor.slice(0, thor.length / 2) +
    thor.slice(thor.length / 2).toUpperCase()
);
