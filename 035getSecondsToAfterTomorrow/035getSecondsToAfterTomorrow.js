"use strict";

/*035getSecondsToAfterTomorrow():  ¿Cuantos segundos faltan para el día de después 
de mañana? Crea una función getSecondsToAfterTomorrow() que devuelva la cantidad 
de segundos que faltan para el día después de mañana.

Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToAfterTomorrow() == 3600 + todos los segundo de un día
P.D.: La función debe poder funcionar para cualquier día, sin valores fijos en el código”.
*/

alert(
  "Quedan: " +
    getSecondsToAfterTomorrow() +
    " segundos para el día después de mañana"
);

function getSecondsToAfterTomorrow() {
  //1º vamos a calcular los segundos que llevamos de hoy:
  let now = new Date(Date.now());

  let minNow = now.getHours() * 60 + now.getMinutes();
  let totalNow = minNow * 60 + now.getSeconds();
  alert(totalNow);
  /*Calculamos cuanto falta para mañana restando los segundos totales de 1 día a los seg
  que ya hemos "completado" de hoy
  A ese resultado le sumamos los segundos del siguiente día*/
  return 24 * 3600 - totalNow + 24 * 3600;
}
