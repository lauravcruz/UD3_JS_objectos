"use strict";

/*027transformSnakeToCamel.js/.html: Escribe la función camelize(str) que convierta 
palabras separadas por _como “mi_cadena_corta” en palabras con mayúscula 
“miCadenaCorta”. Esto sería: quitar todos los _ y que cada palabra después de _ 
comience con mayúscula. Ejemplos:*/
alert(camelize("background_color") == "backgroundColor");
alert(camelize("list_style_image") == "listStyleImage");
alert(camelize("_webkit_transition") == "WebkitTransition");

/*P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo 
(join).*/

function camelize(str) {
  //Partimos la cadena cuando encuentre guión bajo. Cada segmento se guardará en el array
  let segmentos = str.split("_");

  //recorremos desde la posición 1 para que solo ponga en mayúscula después de _, no la 1º letra
  for (let i = 1; i < segmentos.length; i++) {
    segmentos[i] = segmentos[i][0].toUpperCase() + segmentos[i].slice(1);
  }
  return segmentos.join("");
}
