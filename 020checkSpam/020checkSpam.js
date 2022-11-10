"use strict";

/*020checkSpan.js/.html: Escribe una función checkSpam(str) que devuelva true si str 
contiene ‘viagra’ o ‘XXX’, de lo contrario false. La función debe ser insensible a 
mayúsculas y minúsculas:*/
alert(checkSpam("compra ViAgRA ahora")); //true
alert(checkSpam("xxxxx gratis")); //true
alert(checkSpam("XX gratis")); //false
alert(checkSpam("coneja inocente")); //false

function checkSpam(str) {
  //Creamos una expresión regular con las dos condiciones. Añadimos i para que ignore mayúscula/minúscula
  //Como mínimo 3 equis juntas: {3}
  return str.match(/viagra|xxx{3}/i) ? true : false;
}
