// console.log('Hola mundo');

var x = 10; // var es la forma antigua de delcarar variables
const e = 10;

let a = 10;
let b = 10;
let c = 10;
let d = 10;

//También se pueden declarar las variables en una sola linea.
let a1 = 10, b1 = 20, c1 = 10;

//JavaScript ignora cualquier enter o espacio, por lo que otra forma de hacerlo es:
let a2 = 10, 
    b2 = 20, 
    c3 = 10,
    h = 'Hola ',
    s = 'Spiderman';

// Esto también funciona pero es una mala practica
f = 30;

//Para imprimir indicando a que variables hacemos referencia
console.log('a',a);
console.log('b',b);

//Otra forma usar las {}, esto lo convierte a un objeto ( los objetos e muestran entre llaves)
console.log({a});
console.log({b});
console.log({c});

//También se le puede dar un estilo a la consola (de preferencia saber CSS , porque asi se cambia)
//% es para inscrustar un estilo.
console.log('%c Mis variables', 'color:blue; font-weight: bold');

//Imprimir muchas variables
console.table([a, b, c,]); //Recibe como argumento un arreglo [] ( se identifican por las [])

const saludo = h + s;