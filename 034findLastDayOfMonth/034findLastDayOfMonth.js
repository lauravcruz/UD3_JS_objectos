"use strict";

/*033showEruropeanWeekDay.js/.html: Escribe una función getLastDayOfMonth(year, 
month) que devuelva el último día del mes dado. A veces es 30, 31 o incluso 28/29 
para febrero. Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11.
Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto)*/

alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
  let day;
  switch (month) {
    //Meses con 31 días:
    case (0, 2, 4, 6, 7, 9, 11):
      day = 31;
      break;
    //Meses con 30:
    case (3, 5, 8, 10):
      day = 30;
      break;
    //febrero:
    case 1:
      //Un año es bisiesto si es divisible por 4. También lo es si siendo divisible por 100, también lo es entre 400
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        day = 29;
      } else {
        day = 28;
      }
      break;
  }
  return day;
}
