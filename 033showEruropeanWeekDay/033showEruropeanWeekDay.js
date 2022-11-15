"use strict";

/*033showEruropeanWeekDay.js/.html: En los países europeos se cuentan los días de la 
semana a partir del lunes (número 1), seguido del martes (número 2), hasta el 
domingo (número 7). Escribe una función getLocalDay(date) que devuelva el día de la 
semana “europeo” para la variable date. let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) ); // tuesday, should show 2
Una vez lo obtengas, tradúcelo a español.*/

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date));

function getLocalDay(date) {
  //getDay nos da que 0 es Sunday. Cambiamos el 0 por el 7 para el europeo:
  let day = date.getDay() === 0 ? 7 : date.getDay();

  //Lo pasamos a español:
  let diasEspanyol = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  //Restamos 1 porque day va a tener valores de 1 a 7 y el array es de 0 a 6
  return diasEspanyol[day - 1];
}
