"use strict";

/*022extractMoney.js/.html: Tenemos un coste en forma de “$120”. Es decir: el signo de 
dólar va primero y luego el número. Crea una función extractCurrencyValue(str) que 
extraiga el valor numérico de dicho string y lo devuelva. Por ejemplo:*/

alert(extractCurrencyValue("$120") === 120); // true
alert(extractCurrencyValue2("$120") === 120); // true

//Podemos plantearlo de dos formas: o nos quedamos con el string desde la posición siguiente al dolar: 
function extractCurrencyValue(str) {
  let length = str.length - 1;
  return +str.substr(1, length);
}

//O eliminando el símbolo con la función replace
function extractCurrencyValue2(str){
  return +str.replace(/\$/, "");
}
