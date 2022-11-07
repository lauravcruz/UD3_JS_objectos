"use strict";

/*004multiplyNumericProperties.html/.js: Crea una función multiplyNumeric(obj) que 
multiplique todas las propiedades numéricas de obj por 2. Por ejemplo:
// Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};
multiplyNumeric(menu);

// Después de la llamada
menu = {
  width: 400,
  height: 600,
  title: "Mi menú"
};
Nota que multiplyNumeric no necesita devolver nada. Debe modificar el objeto en su 
lugar.
P.D. Usa typeof para verificar si hay un número aquí.*/

let menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

multiplyNumeric(menu);
alert("Width: " + menu.width + " Heigh: " + menu.height);

function multiplyNumeric(obj) {
  for (let property in obj) {
    //Si el valor de la propiedad es número, se reasigna multiplicado por 2:
    if (typeof obj[property] == "number") {
      obj[property] *= 2;
    }
  }
}
