"use strict";

/*021truncateText.js/.html: Crea una función truncate(str, maxlength) que verifique la 
longitud de str y, si excede maxlength – reemplaza el final de str con el carácter de 
puntos suspensivos "...", para hacer su longitud igual a maxlength. El resultado de la 
función debe ser la cadena truncada (si es necesario). Por ejemplo:*/

alert(truncate("Lo que me gustaría contar sobre este tema es:", 20)); //= "Lo que me gustaría c..."
alert(truncate("Hola a todos!", 20)); //= "Hola a todos!"

function truncate(str, maxlength) {
  //Con substring podemos quedarnos con la parte de la cadena que nos interesa. 1º argumento: desde, 2º: hasta.
  return str.length > maxlength ? str.substr(0, maxlength) + "..." : str;
}
