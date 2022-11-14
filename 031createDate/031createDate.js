"use strict";

/*031createDate.js/.html: Crea un objeto Date para la fecha: Feb 20, 2012, 3:12am. La 
zona horaria es local. Muéstralo en pantalla utilizando alert.*/

//Añadimos .toLocaleDataString() para indicarle que la zona horaria es local.
//Al mes le restamos uno porque los meses empiezan desde el 0
let fecha = new Date(2012, 2 - 1, 20, 3, 12, 0).toLocaleDateString();

alert(fecha);
