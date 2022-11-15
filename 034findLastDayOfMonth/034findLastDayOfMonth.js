"use strict";

/*033showEruropeanWeekDay.js/.html: Escribe una función getLastDayOfMonth(year, 
month) que devuelva el último día del mes dado. A veces es 30, 31 o incluso 28/29 
para febrero. Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11.
Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto)*/

alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
  let mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  
  switch(month){
    case 0, 2, 4, 6, 7, 9, 11:
      return "31"; 
  }
  
  
}
