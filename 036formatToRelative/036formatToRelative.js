"use strict";

/*036formatToRelative.js/.html: Cambia el formato a fecha relativa. Escribe una función 
formatDate(date) que muestre la fecha en el siguiente formato:
Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".*/
alert(formatDate(new Date(Date.now() - 1)));

//De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace n seg,".
alert(formatDate(new Date(Date.now() - 10000)));
//De no ser así, si pasó menos de una hora, debe devolver "hace n min.".
alert(formatDate(new Date(Date.now() - 2 * 60000)));
/*De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm". Es 
decir: "día.mes.año horas:minutos", cada uno de ellos en formato de 2 dígitos, por ej. 
31.12.16 10:00.*/
alert(formatDate(new Date(Date.now() - 24 * 3600 * 1000)));

function formatDate(date) {
  let now = new Date(Date.now());
  let diferencia = now - date;

  //La resta de ambas fechas nos da un resultado expresado en milisegundos, por tanto:

  //Para comprobar que pasó menos de 1 seg: 1 seg = 1000 ms. 1 min = 1000 * 60. 1h = 1000 * 3600
  if (diferencia < 1000) {
    return "Ahora mismo";
    //
  } else if (diferencia < 1000 * 60) {
    return "Hace " + Math.floor(now.getSeconds() - date.getSeconds()) + " seg";
  } else if (diferencia < 1000 * 3600) {
    return "Hace " + Math.floor(now.getMinutes() - date.getMinutes()) + " min";
  } else {
    let format =
      date.getDate() +
      "." +
      (date.getMonth() + 1) +
      "." +
      date.getFullYear().toString().slice(-2) +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();

    return format;
  }
}
