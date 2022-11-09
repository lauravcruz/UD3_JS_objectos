/*011addPropertyToString.js/.html: ¿Puedo agregar una propiedad a un string?: 
Considera el siguiente código:

Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué?
*/

/*Sí y no: al imponerle la propiedad se crea una envoltura especial para el tipo primitivo:
un object wrapper. Es la solución que dio JavaScript para que los tipos primitivos tuvieran
acceso a métodos y propiedades de String, Number... etc. 

El problema es que la envoltura solo se crea para ejecutar un método, después desaparece. 
Es por ello que cuando intentamos mostrar la propiedad test del str nos aparece "undefined".
En conclusión: podemos agregar la propiedad test, pero al ser volátil de nada sirve. 

Si tenemos "use strict" activado, JavaScript detiene la ejecución en vez de mostrar "undefined",
por eso lo he quitado en este ejercicio
*/

let str = "Peter";
str.test = 5;

alert(str.test);

//Una manera de resolverlo sería crear un objeto de tipo String en lugar de un primitivo:
let str2 = new String("Peter");
str2.test = 5;

alert(str2 + " " + str2.test);
