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
  //Tenemos el array con los días de la semana internacional
  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //Ponemos el domingo en la última posición:
  daysWeek.push(daysWeek.shift());

  //El día de la semana de getDay() también lo tenemos que cambiar: si devuelve 0, le asignamos 7
  let day = date.getDay() === 0 ? 7 : date.getDay();

  //Creamos un array vacío para los días europeos
  let diasEuropeos = [{}];

  //Lo rellenamos automáticamente sumándole 1 al id para evitar el 0 (sunday)
  for (let i = 0; i < daysWeek.length; i++) {
    diasEuropeos.push({
      id: i + 1,
      dia: daysWeek[i],
    });
  }


  return diasEuropeos.find((item) => item.id === day).dia;
}
