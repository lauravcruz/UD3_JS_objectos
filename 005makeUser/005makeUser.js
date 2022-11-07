"use strict";

/*005makeUser.js/.html: Aquí la función makeUser devuelve un objeto. ¿Cuál es el 
resultado de acceder a su atributo ref? ¿Por qué?*/

/*
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();

alert(user.ref.name); // ¿Cuál es el resultado?
*/

/*La consola nos muestra un error: propiedad undefined.
Ocurre porque el this en JavaScript es evaluado durante el tiempo de ejecución.
Podríamos resolverlo convirtiendo ref en una función: 
*/

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

alert(user.ref().name);
