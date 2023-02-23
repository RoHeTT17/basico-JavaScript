
/*
Estas instruccines son bloqueantes, es decir, bloquea la ejecucion del navegador web y no ejecuta
ninguna otra linea de código hasta que el usuario de click en la alerta.
*/

//muestra una alaerta
alert('Hola Mundo');

//En la alerta se muestra una caja de texto para el usuario ingrese información. Cancelar returna null
//Podemos recibir un string, string vacio (sino escribe nada) y un null
let nombre = prompt('¿Cual es tu nombre?', 'valor default');
console.log(nombre);

//Esta alerta retorna un boleano
let decision = confirm('¿Estas seguro de hacer esto?');
console.log(decision);