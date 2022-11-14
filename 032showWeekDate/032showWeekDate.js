"use strict";

/*032showWeekDate.js/.html: Muestra en pantalla un día de la semana Escribe una 
función getWeekDay(date) para mostrar el día de la semana en formato corto: ‘MO’, 
‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
Por ejemplo:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // debería mostrar "TU"*/

let date = new Date(2012, 0, 3);

alert(getWeekDay(date));

function getWeekDay(date) {
  //Ponemos el domingo el primero porque getDay() devuelve 0 para este día
  let diasSemana = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return diasSemana[date.getDay()];
}
