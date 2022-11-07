"use strict";

/*002verifyIfIsEmpty.js/.html: Escribe la función isEmpty(obj) que devuelva el valor true 
si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:*/

let schedule = {};

alert(isEmpty(schedule)); // true
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule)); // false

//Para comprobar que no haya ninguna propiedad sin especificar cuál:
function isEmpty(obj) {
  return Object.keys(obj).length != 0 ? true : false;
}

