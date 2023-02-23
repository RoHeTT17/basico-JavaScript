
//Esta forma es muy poco común de usar
const arr = new Array(10);//Arreglo de 10 elementos

//Esta forma es mas común. Es un arreglo vacio
const arr2 = [];

let videojuegos = ['Mario 3','Megaman','Chrono Trigger','Metroid'];

//console.log(videojuegos);

//Obtener la primera posición de un arreglo
console.log(videojuegos[0]);

//Se puede agregar cualquier tipo de dato o cosa a un arreglo
let arregloCosas = [
                     true,
                     123,
                     'Fernando',
                     1+2, // esto regresa 3, porque JS hace la operación en la primera barrida del código
                     function(){}, 
                     ()=>{}, //lambda
                     {a:1}, //Objeto literal
                     ['X','Megaman','Zero','Dr. Light'],//Incluso otro arreglo
                     //La coma del ultimo puede o no ir, aunque es una buena practica ponerla
                   ];
//Obtener información del segundo arreglo
console.log(arregloCosas[7][3]);                             