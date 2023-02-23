//Métodos y propiedades de los arreglos
//Los métodos son funciones que vienen internas
//Las propiedades son como variables

let juegos = ['Mario 3','Megaman','Zelda','Chrono'];

//Obtener el largo del arreglo
juegos.length;

//Obtener el ultimo elemento
let ultimo = juegos[juegos.length -1];

//Barrer todos los elementos
juegos.forEach( (elemento, indice, arr)=>{
    console.log({elemento,indice,arr});
});

//Agregar un nuevo elemento al final del arreglo
/*
 Lo que muestra la documentación del push
 (method) Array<string>.push(...items: string[]): number

  Es un metodo, que cuando se hace el push recive unos items
  que deben ser de tipo string y retorna un número.

  Agrega el elemento y retorna la nueva longitud
*/
let nuevalong = juegos.push('F-Zero');
console.log({nuevalong,juegos});

//Agregar un nuevo elemento al inicio del arreglo
nuevalong= juegos.unshift('Fire Emblem');
console.log({nuevalong,juegos});

//Borrar el ultimo elemento del arreglo
//Además retorna el elemnto que se borro
let juegoBorrado = juegos.pop();

//Borrar elemento de una posición especifica
let pos = 1; //el index con el que vamos a iniciar
//splice se le indica en que posición iniciar y cuantos elementos 
//borrar (incluye al de la posición inicial)
//retorna el arreglo de los elementos borrados
let juegosBorrados = juegos.splice(pos,2);

//Obtener la posición de un elemento
//Si regresa -1 es que no lo encontro
let metroidIndex = juegos.indexOf('Zelda');
